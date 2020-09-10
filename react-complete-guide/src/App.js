import React, { Component } from 'react';
import classes from './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue ;
      padding: 8px ;
      cursor: pointer ;
       &:hover : {
        backgroundColor: ${props => props.alt ? 'salmon':'lightgreen'}  ;
        color:  black 
      }`;

class App extends Component {
  state = {
    persons: [
      { id: 'abc1', name: 'max', age: 28 },
      { id: 'abc2', name: 'test', age: 40 },
      { id: 'abc3', name: 'maggie', age: 18 }
    ],
    otherStatae: "rdgdgdgdgzhsh",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'test', age: 40 },
        { name: 'maggie', age: 8 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePerosnHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {


    let persons = null;

    if (this.state.showPersons) {
      persons = <div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePerosnHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}> my hobiess dancing</Person> */}
      </div>
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    };
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>hI I AM APP</h1>
        <p className={classes.join(' ')}>this working</p>
        <button className={classes.Button}
          onClick={this.tooglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
