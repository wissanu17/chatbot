import React, { useState, useRef, useEffect } from 'react';
import './ChatInput.css';
import { Send, Mic, Paperclip, Smile } from 'lucide-react';

const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // ฟังก์ชันสำหรับรับข้อความจาก Sidebar
    const handleSetInputText = (e) => {
      const question = e.detail;
      if (question) {
        setMessage(question);

        // ตั้งค่าข้อความใน textarea
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.selectionStart = inputRef.current.selectionEnd = question.length;
          }
        }, 100);
      }
    };

    document.addEventListener("set-input-text", handleSetInputText);

    return () => {
      document.removeEventListener("set-input-text", handleSetInputText);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message here..."
        className="chat-input"
        disabled={disabled}
      />

      {message.length === 0 && (
        <div className="input-actions">
          <button type="button" className="action-button" title="Attach file" disabled={disabled}>
            <Paperclip size={20} />
          </button>
          <button type="button" className="action-button" title="Voice input" disabled={disabled}>
            <Mic size={20} />
          </button>
          <button type="button" className="action-button" title="Insert emoji" disabled={disabled}>
            <Smile size={20} />
          </button>
        </div>
      )}

      <button type="submit" className="send-button" title="Send message" disabled={!message.trim() || disabled}>
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatInput;