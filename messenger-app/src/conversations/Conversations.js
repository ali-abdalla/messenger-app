import React, { Component } from 'react';
import './Conversations.css';
import { BASE_URL } from '../environment';
import ConversationInfo from '../shared/components/conversation-info/ConversationInfo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ChatDetails from '../chat-details/ChatDetails';

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
      <Router>
        <div>
          <header className="Conversations-header">
            <img className="Conversations-user-pic" src={this.state.user.profilePicture} alt={this.state.user.fullName} />
            <span className="Conversations-username">{this.state.user.fullName}</span>
          </header>
          {
            this.state.conversations.map(el => <Link to="/chat-details"><ConversationInfo key={el.id} conversation={el} /></Link>)
          }
          <Route path="/chat-details" component={ChatDetails} />
        </div>
      </Router>
    );
  }
}

export default Conversations;
