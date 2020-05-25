import React from 'react'
import classes from './CreateProject.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import { connect } from 'react-redux'
import { fetchProjectUserTypes, createProject } from '../../store/actions/project'
import UserType from '../UserType/UserType'
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
            }
        },
        numUsers: 1,
        types: []
    }

    UNSAFE_componentWillMount() {
        this.props.fetchProjectUserTypes()
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
            // this.props.createProject(fields);

        } else {
            // TODO: Алерт об ошибке валидации
        }
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.history.push('/user_projects');
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

    onChangeUsersInputHandler = (event) => {
        // const {usersInputSelect} = this.state
        
    }

    onChangeUsersSelectHandler = (event) => {
        
        const {types,numUsers} = this.state;
        const {id,label} = event;
        types[id] = label
        this.setState({types});

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

    addUser = event => {
        event.preventDefault();
        const { numUsers } = this.state;
        this.setState({ numUsers: numUsers + 1 });
    }

    remUser = event => {
        event.preventDefault();
        const { numUsers } = this.state;
        if (numUsers > 0) {
            this.setState({ numUsers: numUsers - 1 });
        }
    }

    render() {
        const { numUsers } = this.state;
        const options = this.props.projectUserTypes.map((projectUserType) => {
                return {
                    value: projectUserType.id,
                    label: projectUserType.name,
                    id: `${numUsers - 1}`
                }
            })
        const users = []
        for (var i = 0; i < numUsers; i++) {
            users.push(<UserType
                key={i}
                options={options}
                onChangeUsersInputHandler={(event) => this.onChangeUsersInputHandler(event)}
                onChangeUsersSelectHandler={(event) => this.onChangeUsersSelectHandler(event)}
                cls={`ut-${i}`}
            />)
        }
        return (
            <div className={classes.CreateProject}>
                <div>
                    <h1>Создание проекта</h1>
                    <form onSubmit={this.submitHandler} className={classes.CreateProjectForm}>

                        {this.renderInputs()}
                        {users}
                        <Button onClick={this.addUser}>+</Button>
                        <Button onClick={this.remUser}>-</Button>
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

function mapStateToProps(state) {
    return {
        projectUserTypes: state.projectReducer.projectUserTypes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createProject: (fields) => dispatch(createProject(fields)),
        fetchProjectUserTypes: () => dispatch(fetchProjectUserTypes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);