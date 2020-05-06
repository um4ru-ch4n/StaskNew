import React from 'react'
import classes from './Auth.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import { connect } from 'react-redux'
import { auth, autoLogin } from '../../store/actions/auth'
import axios from '../../axios/axios-stask'

function vaidateEmail(email) {
    const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
    return re.test(String(email).toLocaleLowerCase());
}

class Auth extends React.Component {
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введте корректный email',
                valid: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введте корректный пароль',
                valid: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    componentDidMount() {
        autoLogin()
    }

    loginHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
        );
    }

    registerHandler = () => {
        //TODO: Валидация полей при регистрации + метод регистрации
        const {email} = this.state.formControls
        const {password} = this.state.formControls
        if (this.validateControl(email.value, email.validation) && this.validateControl(password.value, password.validation)) {
            this.props.auth(
                email.value,
                password.value,
            );
        } 
    }

    submitHandler = event => {
        event.preventDefault();
    }

    onChangeHandler = (event, controlName) => {
        const { formControls } = this.state
        const control = { ...formControls[controlName] }

        control.value = event.target.value;

        formControls[controlName] = control;

        this.setState({
            formControls,
        })
    }

    validateControl(value, validation) {
        if (!validation) {
            return true;
        }
        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (validation.email) {
            isValid = vaidateEmail(value) && isValid;
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event) => this.onChangeHandler(event, controlName)}
                />
            );
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        {this.renderInputs()}

                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >Войти</Button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password) => dispatch(auth(email, password)),
        autoLogin: () => dispatch(autoLogin())
    };
}

export default connect(null, mapDispatchToProps)(Auth);