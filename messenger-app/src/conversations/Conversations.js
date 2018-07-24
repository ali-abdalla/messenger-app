import React, { Component } from 'react';
import './Conversations.css';
import { BASE_URL } from '../environment';
import ConversationInfo from '../shared/components/conversation-info/ConversationInfo';

class Conversations extends Component {

  constructor() {
    super();
    this.state = {
      user: {},
      conversations: [],
      error: false
    };
    this.fetchUserData();
    this.fetchConversations();
  }

  fetchUserData() {
    const url = `${BASE_URL}/user`;
    fetch(url, {method: "GET"})
      .then(response => response.json())
      .then(user => this.setState({user: user}))
      .catch(err => this.setState({error: true}));
  }

  fetchConversations() {
    const url = `${BASE_URL}/conversations`;
    fetch(url, {method: "GET"})
      .then(response => response.json())
      .then(conversations => {
        console.log(conversations);
        this.setState({conversations: conversations})
      })
      .catch(err => this.setState({error: true}));
  }

  render() {
    return (
      <div>
        <header className="Conversations-header">
          <img className="user-pic" src={this.state.user.profilePicture} alt={this.state.user.fullName} />
          <span className="Conversation-username">{this.state.user.fullName}</span>
        </header>
        {
          this.state.conversations.map(el => <ConversationInfo key={el.id} conversation={el} />)
        }
      </div>
    );
  }
}

export default Conversations;
