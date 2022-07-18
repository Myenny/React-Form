import React, { Component } from 'react';
import './App.css';
import Form from './components/form.js';
import User from './components/user.js';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <User />
      </div>
    );
  }
}

export default App;
