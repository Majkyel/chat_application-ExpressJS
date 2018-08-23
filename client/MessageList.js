import React from 'react';
import ReactDOM from 'react-dom';
import styles from './MessageList.css';

const Message = props => (
    <div className={styles.Message}>
        <strong>{props.from} :</strong>
        <span> {props.text}</span>
    </div>
);

const MessageList = props => (
    <div className={styles.MessageList}>
        {
            props.messages.map((message) => {
                return (
                    <Message
                        key={message.id}
                        from={message.from}
                        text={message.text}
                    />
                );
            })
        }
    </div>
);

export default MessageList;
