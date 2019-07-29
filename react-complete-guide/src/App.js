import React, {Component} from 'react';
import './App.css';
import {person as NewPerson} from './Person/Person'

class  App extends Component {
  render() {
    return (
        <div className="App">
          <h1>This is too good</h1>
          <NewPerson/>
        </div>
    );
  }
}
export{App};
