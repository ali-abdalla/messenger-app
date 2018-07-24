import React, { Component } from 'react';
import './ConversationInfo.css';

class ConversationInfo extends Component {

    render() {
        return (
            <div className="ConversationInfo">
                <div className="image-container">
                    <img src={this.props.conversation.image} alt=""/>
                </div>
                <div class="info-container">
                    <h5 className="title">{this.props.conversation.name}</h5>
                    <label>{this.props.conversation.lastMessage.user.fullName}</label>: {this.props.conversation.lastMessage.content}
                    <div className="date">{this.props.conversation.lastMessage.date}</div>
                </div>
            </div>
        );
    }
}

export default ConversationInfo;