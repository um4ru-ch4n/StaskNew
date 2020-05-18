import React from 'react'
import classes from './Auth.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import { connect } from 'react-redux'
import { auth } from '../../store/actions/auth'

class Auth extends React.Component {
    state = {
        isFormValid: false,
        formControls: {
            nickname: {
                value: '',
                type: 'text',
                label: 'Никнейм',
                errorMessage: 'Введте корректный никнейм',
                valid: false
            },
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введте корректный email',
                valid: false
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введте корректный пароль',
                valid: false
            }
        }
    }

    loginHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
        );
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

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        {this.renderInputs()}
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >Войти</Button>

                    </form>
                    {/* TODO: Вывести алерт об ошибке авторизации / об успешной авторизации */}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password) => dispatch(auth(email, password))
    };
}

export default connect(null, mapDispatchToProps)(Auth);