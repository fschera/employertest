import React, {Component, Fragment} from 'react';
//import ReactDOM from 'react-dom/client';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import styled from 'styled-components';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
*/
import './app.css';
//import BootstrapTest from '../../BootstrapTest';

import {Container} from 'react-bootstrap';

class Form extends Component {
    timer = null;
    state = {
        advOpen: false
    }

    componentDidMount(){
        this.timer = setTimeout(this.handleClick, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    handleClick = () => {
        this.setState(({advOpen}) => ({ 
            advOpen: !advOpen,
        }));
    }

    render() {
        console.log(this.state.advOpen);
        return (
            <Container>
                <form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto"
                        style={{'overflow': 'hidden',
                        'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {this.state.advOpen ? // Portal rendern nur wenn advOpen = true
                        <Portal>
                            <Msg/>
                        </Portal>
                        : null}
                 </form>
            </Container>
        )
    }
}

const Portal = (props) => {
    // createPortal hat 2 Argumente: 
    // child (was zu render ist) und container für child 
    // Ein Container erstellen:
    const node = document.createElement('div');
    document.body.appendChild(node); // appendChild oder append - nicht wichtig

    // So werden wir direkt ein Element erstellt - den virtual DOM Baum umgegangen
    // Das ist generell nicht gut, aber hier ist das unvermeidbar, weil Portale 
    // direkt mit dem DOM Baum arbeiten, ohne das virtual DOM Baum.
    return ReactDOM.createPortal(props.children, node);
}

const Msg = () => {
    return (
        <div 
            style={{'width': '500px',
                'height': '150px',
                'backgroundColor': 'red',
                'position': 'absolute',
                'right': '0',
                'bottom': '0',
            }}>
            Hello portal
        </div>
    );
}

/*class App extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            data: [
                {name: 'John S.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex D.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Anna F.', salary: 5000, increase: false, rise: false, id: 3}
            ], 
            term: '',
            filter: ''
        }

        this.maxId = 4;
    }

    deleteItem = (id) =>{
        this.setState(({data}) => { // destrukturieren
            console.log(id);
            return {
                data: data.filter(item => item.id !== id)
            };
        });
    }

    addItem = (name, salary) => {
        
        const newItem = {
            name, 
            salary, 
            increase: false, 
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => { 
                    if(item.id === id){
                        return {...item, [prop]: !item[prop]};
                    }

                    return item;
            })
        }));
    }

    searchEmp = (items, term) => { 
        if(term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    filterPost = (items, filter) => { 
        switch(filter){
            case 'rise': 
                return items.filter(item => item.rise); // abkürzung von if(item.rise) return item;
                // break braucht React nicht
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term}); 
    }

    onFilterSelect = (filter) => {
        this.setState({filter}); 
    }

    onSalaryChange = (e, id) => {
        const newSalary = e.currentTarget.value;

        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, salary: newSalary};
                }
                return item;
            })
        }));
    }

    render(){
        const {data, term, filter} = this.state
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
            <AppInfo 
                employees={employees} 
                increased={increased}/>

            <div className='search-panel'>
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter onFilterSelect={this.onFilterSelect} filter={filter}/>
            </div>

            <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                onSalaryChange={this.onSalaryChange}/>
            <EmployeesAddForm onAdd={this.addItem}/>
        </div>  
        );
    };
}

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;*/

/*const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2); //.2 = 20% transparenz 
    a {
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'green' : 'black'};
    }
    input {
        display: block;
        margin-top: 10px;
    }
`;

const Header = styled.h2`
    font-size: 22px; 
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;


class WhoAmI extends Component {
    constructor(props){
        super(props);
    
        this.state = { 
            years: 27,
            position: '' 
        }
    }

    nextYear = () => { 
        this.setState(state => ({
            years: state.years + 1 //war: this.state.years++
        }));
    }

    commitInputChanges = (e) => {
        console.log(e.target.value); // wir möchten das in state speichern 
    }
        
    
    render (){
        const {name, surname, link} = this.props; 
        const {position, years} = this.state; 

        return (
            <EmpItem active>
                <Button onClick={this.nextYear}>...</Button> 
                <Header>My name is {name}, surname - {surname}, 
                    age - {years}
                    position - {position} </Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Ihre Position eintragen</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}></input>
                </form>
            </EmpItem>
        );
    }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
    color: red;

`;

const DynamicGreating = (props) => {
    return( // Bootstap Styles margin bottom 30px, padding 30px
        <div className={'mb-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'});
                })
            }
        </div>
    )
}

const HelloGreating = () => {
    return (
        <div style={{'width': '600px', 'margin': '0 auto'}}>
            <DynamicGreating color={'primary'}>
                <h2>Hallo 5</h2>
            </DynamicGreating>
        </div>
    );
}

const Message = (props) => {
    return (
        <h2>The counter is {props.counter}</h2>
    );
}

class Counter extends Component {
    state = {
        counter: 0
    }

    changeCounter = () => {
        // counter aus state rausholen
        this.setState(({counter}) => ({
            counter: counter + 1
        }));
    }

    render(){
        return( // react-fragment
            <>
                <button 
                        className={'btn btn-primary'}
                        onClick={this.changeCounter}>
                    Ckick me
                </button>
                {this.props.some(this.state.counter)}
                {this.props.some(this.state.counter)}
            </>
        );
    }
}

function App(){
    return <Wrapper>
        <Counter some = {counter => (
            <Message counter={counter}/> 
        )}/>
        <Counter render = {counter => (
            <HelloGreating counter={counter}/> 
        )}/>
        <HelloGreating/>
        <BootstrapTest
            left = {
                <DynamicGreating color={'primary'}>
                    <h2>Hallo 1</h2>
                    <h2>Hallo 2</h2>
                </DynamicGreating>
            }
            right = {
                <DynamicGreating color={'primary'}>
                    <h2>Hallo 3</h2>
                    <h2>Hallo 4</h2>
                </DynamicGreating>
            }
        />
        <WhoAmI name={"John"} surname="Smith" link="facebook.com"/>
	    <WhoAmI name="Alex" surname="Shepard" link="heise.de"/>
      </Wrapper>;
}*/

/*class TextInput extends Component {
    doSmth = () => {
        console.log('smth');
    }

    render(){
        return (
            <input 
            type="email" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="name@example.com"/>
        );
    }
}
*/
function App() {
    return (
        <Form/>
    );
}

export default App;