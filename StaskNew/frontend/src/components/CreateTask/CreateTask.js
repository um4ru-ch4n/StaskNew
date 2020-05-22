import React from 'react'
import classes from './CreateTask.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import { connect } from 'react-redux'
import { createTask } from '../../store/actions/task'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const getDateTimeForInput = (date) => {
    return (date).getFullYear()+"-"+(((date).getMonth()+1 + "").length === 1 ? "0" + ((date).getMonth()+1) : ((date).getMonth()+1))+"-"+(((date).getDate() + "").length === 1 ? "0" + ((date).getDate()) : ((date).getDate()))+"T"+(((date).getHours() + "").length === 1 ? "0" + ((date).getHours()) : ((date).getHours()))+":"+(((date).getMinutes() + "").length === 1 ? "0" + ((date).getMinutes()) : ((date).getMinutes()))
}

class CreateTask extends React.Component {
    state = {
        isFormValid: false,
        touched: false,
        formControls: {
            title: {
                value: '',
                type: 'text',
                label: 'Название Таска',
                errorMessage: 'Слишком длинное или короткое название Таска',
                valid: false,
                validation: {
                    required: true,
                    maxLength: 100,
                    minLength: 2
                }
            },
            description: {
                value: '',
                type: 'text',
                label: 'Описание Таска',
                errorMessage: 'Введте корректное описание Таска',
                valid: false,
                validation: {
                    required: false
                }
            },
            start_date: {
                value: getDateTimeForInput(new Date()),
                type: 'datetime-local',
                label: 'Начало выполнения Таска',
                errorMessage: 'Введте корректное начало выполнения Таска',
                valid: false,
                min: getDateTimeForInput(new Date()),
                validation: {
                    required: false,
                    startDate: true
                }
            },
            end_date: {
                value: '',
                type: 'datetime-local',
                label: 'Конец выполнения Таска',
                errorMessage: 'Введте корректный конец выполнения Таска',
                valid: false,
                min: getDateTimeForInput(new Date()),
                validation: {
                    required: false,
                    endDate: true
                }
            },
            is_public: {
                checked: false,
                type: 'checkbox',
                label: 'Публичный',
                errorMessage: '',
                valid: false,
                validation: {
                    required: false
                }
            },
        },
        taskUsers: []
    }

    createTasktHandler = () => {
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
            if (formControls[name].checked) {
                fields[name] = formControls[name].checked
            } else {
                fields[name] = formControls[name].value
            }
        })
        if (!fields["is_public"]) {
            fields["is_public"] = false
        }
        fields["project"] = this.props.currentProject.id
        fields["users"] = this.state.taskUsers
        
        if (isFormValid) {
            this.props.createTask(fields);
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
        if (event.target.checked !== undefined) {
            control.checked = event.target.checked;
        }
        formControls[controlName] = control;
        this.setState({
            formControls,
        })
    }

    onSelectChangeHandler = event => {
        let taskUsers = []
        if (event) {
            taskUsers = event.map(option => {
                return (
                    option.value
                )
            })
        }
        
        this.setState({
            taskUsers
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
        if (validation.startDate && value !== undefined) {
            isValid = new Date(value) - new Date(getDateTimeForInput(new Date())) >= 0 && isValid;
        }

        if (validation.endDate && value !== "") {
            isValid = new Date(value) - new Date(this.state.formControls.start_date.value) >= 0 && isValid;
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
                    min={control.min || null}
                    checked={control.checked}
                />
            );
        })
    }

    render() {
        const animatedComponents = makeAnimated();

        const options = this.props.projectUsers.map(user => {
            return {
                value: user.id,
                label: user.email
            }
        })

        return (
            <div className={classes.CreateTask}>
                <div>
                    <h1>Создание Таска</h1>
                    <form onSubmit={this.submitHandler} className={classes.CreateTaskForm}>

                        {this.renderInputs()}
                        <label style={{fontWeight: 'bold'}}>Выбор участника</label>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={[]}
                            isMulti
                            options={options}
                            onChange={(event) => this.onSelectChangeHandler(event)}
                        />

                        <Button
                            type="success"
                            onClick={this.createTasktHandler}
                        >
                            Создать Таск
                        </Button>
                    </form>
                    {/* TODO: Вывести алерт об ошибке создания Таска / успешном создании Таска */}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentProject: state.projectReducer.currentProject
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createTask: (fields) => dispatch(createTask(fields))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);