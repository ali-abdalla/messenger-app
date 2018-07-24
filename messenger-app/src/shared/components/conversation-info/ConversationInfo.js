import React, { Component } from 'react';
import './ConversationInfo.css';

class ConversationInfo extends Component {

    render() {
        return (
            <div className="ConversationInfo">
                <div className="ConversationInfo-image-container">
                    <img className="ConversationInfo-pic" src={this.props.conversation.image} alt=""/>
                </div>
                <div className="ConversationInfo-info-container">
                    <h5 className="ConversationInfo-title">{this.props.conversation.name}</h5>
                    <label className="ConversationInfo-user-fullname">{this.props.conversation.lastMessage.user.fullName}</label>: <span className="ConversationInfo-content">{this.props.conversation.lastMessage.content}</span>
                    <div className="ConversationInfo-date">{this.props.conversation.lastMessage.date}</div>
                </div>
                <hr />
            </div>
        );
    }
}

export default ConversationInfo;