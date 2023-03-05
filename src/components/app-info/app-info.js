import React from 'react';
import './app-info.css';

const AppInfo = ({employees, increased}) => { // immer groß, sonst kein Komponent, sondern Element
    return (
        <div className="app-info">
            <h1>Mitarbeitererfassung im Unternehmen N </h1>
            <h2>Gesamtzahl der Mitarbeiter: {employees}</h2>
            <h2>Premie erhalten: {increased}</h2>
        </div>
    );
}

export default AppInfo;