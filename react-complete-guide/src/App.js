import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
    let btnClass = [classes.Button];
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
   
      </div>
     btnClass.push(classes.Red);
    };
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>hI I AM APP</h1>
        <p className={assignedClasses.join(' ')}>this working</p>
        <button className={btnClass.join(' ')}
          onClick={this.tooglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
