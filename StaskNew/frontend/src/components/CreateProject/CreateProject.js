import React from 'react'
import classes from './CreateProject.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/project'

class CreateProject extends React.Component {
    state = {
        isFormValid: false,
        touched: false,
        formControls: {
            title: {
                value: '',
                type: 'text',
                label: 'Название проекта',
                errorMessage: 'Слишком длинное или короткое название проекта',
                valid: false,
                validation: {
                    required: true,
                    maxLength: 100,
                    minLength: 5
                }
            },
            theme: {
                value: '',
                type: 'text',
                label: 'Тема проекта',
                errorMessage: 'Слишком длинная или короткая тема проекта',
                valid: false,
                validation: {
                    required: false,
                    maxLength: 100,
                    minLength: 5
                }
            },
            description: {
                value: '',
                type: 'text',
                label: 'Описание проекта',
                errorMessage: 'Введте корректное описание проекта',
                valid: false,
                validation: {
                    required: false
                }
            },
            
        }
    }

    createProjectHandler = () => {
        const formControls = { ...this.state.formControls }

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            formControls[name].valid = this.validateControl(formControls[name].value, formControls[name].validation)
            isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({
            isFormValid,
            touched: true
        })

        const fields = {}

        Object.keys(formControls).forEach(name => {
            fields[name] = formControls[name].value
        })
        
        if (isFormValid) {
            this.props.createProject(fields);
        } else {
            // TODO: Алерт об ошибке валидации
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
            if (validation.minLength) {
                isValid = value.length >= validation.minLength && isValid;
            }
            
            if (validation.maxLength) {
                isValid = value.length <= validation.maxLength && isValid;
            }
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
                    touched={this.state.touched}
                    errorMessage={control.errorMessage}
                    onChange={(event) => this.onChangeHandler(event, controlName)}
                />
            );
        })
    }

    render() {
        return (
            <div className={classes.CreateProject}>
                <div>
                    <h1>Создание проекта</h1>
                    <form onSubmit={this.submitHandler} className={classes.CreateProjectForm}>

                        {this.renderInputs()}

                        <Button
                            type="success"
                            onClick={this.createProjectHandler}
                        >
                            Создать проект
                        </Button>
                    </form>
                    {/* TODO: Вывести алерт об ошибке создания проекта / успешном создании проекта */}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createProject: (fields) => dispatch(createProject(fields))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);