import React from 'react'
import styles from './Message.module.css';
import ReactEmoji from 'react-emoji';


const Message = ({ message :{ text, user }, name }) => {

    let isSentByCurrentUser = false;
    const trimmedName = name ? name.trim().toLowerCase() : "";

    if(user === trimmedName)
    {
        isSentByCurrentUser=true;
    }

  return (
    isSentByCurrentUser
    ? (
        <div className={styles.messageContainer}>
            <p className={styles.sentText}>{trimmedName}</p>
            <div className={styles.messageBox}>
                <p className={styles.messageText}>{ReactEmoji.emojify(text)}</p>
            </div>
        </div>
    )
    : (
        <div className={styles.messageContainer}>
            <div className={styles.messageBox}>
                <p className={styles.messageText}>{ReactEmoji.emojify(text)}</p>
            </div>
            <p className={styles.senTest}>{trimmedName}</p>
        </div>
    )
  )
}

export default Message