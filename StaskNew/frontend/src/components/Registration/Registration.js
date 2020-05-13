import React from 'react'
import classes from './Registration.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import { connect } from 'react-redux'

import {registration} from '../../store/actions/registration'

const vaidateEmail = email => {
    const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
    return re.test(String(email).toLocaleLowerCase());
}

class Registration extends React.Component {
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
                    email: true,
                    maxLength: 100
                }
            },
            username: {
                value: '',
                type: 'text',
                label: 'Никнейм',
                errorMessage: 'Введте корректный никнейм',
                valid: false,
                validation: {
                    required: true,
                    maxLength: 30,
                    minLength: 3
                }
            },
            first_name: {
                value: '',
                type: 'text',
                label: 'Имя',
                errorMessage: 'Введте корректное имя',
                valid: false,
                validation: {
                    maxLength: 50
                }
            },
            last_name: {
                value: '',
                type: 'text',
                label: 'Фамилия',
                errorMessage: 'Введте корректную фамилию',
                valid: false,
                validation: {
                    maxLength: 50
                }
            },
            patronymic: {
                value: '',
                type: 'text',
                label: 'Отчество',
                errorMessage: 'Введте корректное отчество',
                valid: false,
                validation: {
                    maxLength: 50
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

    registerHandler = () => {
        const formControls = { ...this.state.formControls }

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            formControls[name].valid = this.validateControl(formControls[name].value, formControls[name].validation)
            isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({
            isFormValid
        })

        const fields = {}

        Object.keys(formControls).forEach(name => {
            fields[name] = formControls[name].value
        })
        
        if (isFormValid) {
            this.props.registration(fields);
        } else {
            // TODO: Алерт об ошибки валидации
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
        
        if (validation.maxLength) {
            isValid = value.length <= validation.maxLength && isValid;
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
            <div className={classes.Registration}>
                <div>
                    <h1>Регистрация</h1>
                    <form onSubmit={this.submitHandler} className={classes.RegistrationForm}>

                        {this.renderInputs()}

                        <Button
                            type="success"
                            onClick={this.registerHandler}
                        >
                            Зарегистрироватсья
                        </Button>
                    </form>
                    {/* TODO: Вывести алерт об ошибке регистрации или о ошибке валидации полей / об успешной регистрации */}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registration: (formControls) => dispatch(registration(formControls))
    };
}

export default connect(null, mapDispatchToProps)(Registration);