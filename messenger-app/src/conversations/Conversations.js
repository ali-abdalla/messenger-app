import React, { Component } from 'react';
import './Conversations.css';

class Conversations extends Component {

  constructor() {
    super();
    this.state = {
      user: {},
      error: false
    };
    this.getUserData();
  }

  getUserData() {
    const url = "http://localhost:3000/user";
    fetch(url, {method: "GET"})
      .then(response => response.json())
      .then(user => {
        this.setState({user: user});
      })
      .catch(err => this.setState({error: true}));
  }

  render() {
    return (
      <div>
        <header className="Conversations-header">
          <img className="img" src={this.state.user.profile_picture}  alt="" />
          <span className="user-fullname">{this.state.user.full_name}</span>
        </header>
        <div>
          
        </div>
      </div>
    );
  }
}

export default Conversations;
