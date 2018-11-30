import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddInput from './component/AddInput';
import List from './component/List';
import VisibilityBtn from './component/VisibilityFilter'

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <AddInput />
        <List />
        <VisibilityBtn />
      </div>
    );
  }
}

export default App;
