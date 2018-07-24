import React, { Component } from 'react';
import './App.css';
import Conversations from './conversations/Conversations';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-conversations">
          <Conversations />
        </div>
      </div>
    );
  }
}

export default App;
