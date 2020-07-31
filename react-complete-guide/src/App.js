import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'max', age:28},
      {name:'test', age:40},
      {name:'maggie', age:18}
    ],
    otherStatae:"rdgdgdgdgzhsh"
  }

  switchNameHandler=()=>{
    // console.log('Was clicked');
    this.setState({
      persons:[
      {name:'maximilian', age:28},
      {name:'test', age:40},
      {name:'maggie', age: 8}
    ]})
  }
  render() {
    return (
      <div className="App">
       <h1>hI I AM APP</h1>
       <p>this working</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person  name={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}> my hobiess dancing</Person>

      </div>
    );
  }
}

export default App;
