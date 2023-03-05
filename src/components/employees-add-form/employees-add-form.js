import React from 'react';
import {Component} from 'react';

//import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    state = {
        name: '',
        salary: ''
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    static logged = 'on';

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new Mitarbeiter</h3>
                <form
                    className="add-form d-flex" onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Wie heißt er?" 
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Gehalt in €?" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Hinzufügen</button>
                </form>
            </div>
        )
    }
}

console.log(EmployeesAddForm.logged);

export default EmployeesAddForm;