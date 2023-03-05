import React from 'react';
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => { // data ist aus dem props rausgnommen
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmployeesListItem 
                key={id}
                {...itemProps}
                onDelete = {() => onDelete(id)}
                onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>                
        );
    });

    return (
        <div className="app-list list-group ncrease">
            {elements}
        </div>
    )
}

export default EmployeesList;