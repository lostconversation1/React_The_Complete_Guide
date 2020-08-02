import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'test', age: 40 },
      { name: 'maggie', age: 18 }
    ],
    otherStatae: "rdgdgdgdgzhsh"
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 40 },
        { name: 'maggie', age: 26 }
      ]
    })
  }

  render() {
    const style = {
      backgoundColour: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>hI I AM APP</h1>
        <p>this working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maks')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}> my hobiess dancing</Person>
      </div>
    );
  }
}

export default App;
