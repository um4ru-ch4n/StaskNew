import React from 'react';
import Input from '../UI/Input/Input';
import classes from './UserType.css'
import Select from '../UI/Select/Select'
const UserType = props => {
    
        return (
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
                        className={props.cls}
                        options={props.options}
                        onChange={props.onChangeUsersSelectHandler}
                    />
                </div>
            </div>
        )
    }


export default UserType;