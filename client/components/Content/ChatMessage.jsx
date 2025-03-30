import React from 'react';
import './ChatMessage.css';

const formatTimestamp = (timestamp) => {
  if (!timestamp) return '';

  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const ChatMessage = ({ message, isUser, timestamp }) => {
  return (
    <div className={`chat-message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-avatar">
        {isUser ? (
          <div className="user-avatar">U</div>
        ) : (
          <div className="bot-avatar">B</div>
        )}
      </div>
      <div className="message-content">
        <div className="message-text">{message}</div>
        {timestamp && <div className="message-timestamp">{formatTimestamp(timestamp)}</div>}
      </div>
    </div>
  );
};

export default ChatMessage;
