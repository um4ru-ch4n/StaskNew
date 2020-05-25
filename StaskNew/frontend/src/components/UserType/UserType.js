import React from 'react';
import Input from '../UI/Input/Input';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import classes from './UserType.css'

const UserType = props => {
    
        const animatedComponents = makeAnimated();
        return(
            <div className={classes.UserType}>
                <Input
                    type='email'
                    label='Участник проекта'
                    onChange={props.onChangeUsersInputHandler}
                    className={props.cls}
                />
                <div className={classes.SelectGroup}>
                    <label style={{margin: '0',paddingBottom: '2px',width: '220px'}}>Тип пользователя</label>
                    <Select
                        component = {animatedComponents}
                        closeMenuOnSelect={true}
                        defaultValue={props.selectValue}
                        options={props.options}
                        onChange={props.onChangeUsersSelectHandler}
                        className={props.cls}
                    />
                </div>
            </div>
        )
    }


export default UserType;