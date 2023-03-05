import React from 'react';
import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Alle Mitarbeiter', colored: false},
        {name: 'rise', label: 'Zum Höhergruppieren', colored: false},
        {name: 'moreThen1000', label: 'Mit dem Gehalt meht als 1000€', colored: true}
    ]

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name; // Active kann nur ein von drei sein
        const clazz = active ? "btn-light" : "btn-outline-light";
        const myStyle = colored ? {color: 'red'} : null;

        return (
            <button 
                    className = {`btn ${clazz}`}
                    type= "button"
                    key={name}
                    onClick = {() => props.onFilterSelect(name)}
                    style={myStyle}>
                            {label}
                </button>   
        );
    });

    return (
        <div className="btn-group" >
            {buttons}
        </div>
    );
}

export default AppFilter;