import React from 'react'
import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { left } from '@popperjs/core';

const MessageForm = (props) => {
    const [value, setValue] = useState('');

    const {chatId, creds} = props;

    const handleSubmit = (event) =>{
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, {text});

        setValue('');
    }
    const handleChange = (event) =>{
        setValue(event.target.value);

        isTyping(props, chatId);
    }

    const handleUpload = (event) =>{
        sendMessage(creds, chatId, { files: event.target.files, text: ''})
    }
    return (
        <form className="message-form" onSubmit={handleSubmit} style={{padding:'0px', display:'flex', justifyContent:'center', flexDirection:'row'}}>
            <input type="text" 
                className="message-input" 
                placeholder="Send a message..." 
                value={value} 
                onChange={handleChange}
                onSubmit={handleSubmit} 
            />

            <label htmlFor="upload-button" style={{paddingTop:'2px', display:'inline-flex', paddingLeft:'0px'}}>
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input type="file"
                multiple={false}
                id="upload-button"
                style={{display:'none'}}
                onChange={handleUpload} 
            />
            <button type="submit" className="send-button" style={{paddingTop:'10px', display:'inline-flex', paddingLeft:'0px'}}>
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}

export default MessageForm
