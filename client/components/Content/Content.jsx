import React, { useState, useRef, useEffect } from 'react';
import './Content.css';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { sendMessage } from '../../src/services/chatbotService';
import { MessageCircle, Info, Trash2 } from 'lucide-react';

function Content() {
  const initialMessage = {
    id: 1,
    text: "Hello! I'm the KKU Chatbot. How can I help you today?",
    isUser: false,
    timestamp: new Date().toISOString()
  };

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('kku-chatbot-messages');
    return savedMessages
      ? JSON.parse(savedMessages)
      : [initialMessage];
  });
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('kku-chatbot-messages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async (text) => {
    // Add user message to chat
    const userMessage = {
      id: messages.length + 1,
      text,
      isUser: true,
      timestamp: new Date().toISOString()
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      // Get response from chatbot service
      const response = await sendMessage(text);

      // Add bot response to chat
      const botMessage = {
        id: messages.length + 2,
        text: response,
        isUser: false,
        timestamp: new Date().toISOString()
      };

      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);

      // Add error message
      const errorMessage = {
        id: messages.length + 2,
        text: 'Sorry, I encountered an error. Please try again later.',
        isUser: false,
        timestamp: new Date().toISOString()
      };

      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{...initialMessage, timestamp: new Date().toISOString()}]);
  };

  const suggestedQuestions = [
    "What programs does KKU offer?",
    "Tell me about admission requirements",
    "What facilities are available on campus?",
    "How can I apply to KKU?"
  ];

  const handleSuggestionClick = (question) => {
    handleSendMessage(question);
  };

  const showWelcomeMessage = messages.length === 1;

  return (
    <section id="content" className="chatbot-container">
      <div className="chat-header">
        <h2>KKU Chatbot</h2>
        <div className="chat-header-controls">
          <p>Ask me anything about Khon Kaen University</p>
          <button className="clear-chat-btn" onClick={clearChat} title="Clear conversation">
            <Trash2 size={14} />
            Clear chat
          </button>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map(message => (
          <ChatMessage
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}

        {showWelcomeMessage && (
          <div className="chat-welcome">
            <h3>Welcome to KKU Chatbot Assistant</h3>
            <p>
              I'm here to provide information about Khon Kaen University. You can ask me about
              admissions, programs, campus facilities, student life, and more.
            </p>

            <div className="suggestion-chips">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="suggestion-chip"
                  onClick={() => handleSuggestionClick(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {isLoading && (
          <div className="bot-typing">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </section>
  );
}

export default Content;
