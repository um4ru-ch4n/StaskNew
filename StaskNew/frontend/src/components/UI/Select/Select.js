import React from 'react';
import classes from './Select.css'
const Select = props => {
    const { options } = props;
    const types = []
    types.push(<option key='init'>Выберите роль</option>)
    for (let i = 0; i < options.length; i++) {
        types.push(<option key={i}>{options[i].label}</option>)
    }

    return (      
            <select
                id = {props.className}
                onChange ={props.onChange} 
                className={classes.Select}>
                {types}
            </select>
    )
}

export default Select;