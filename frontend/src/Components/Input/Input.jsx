import React from 'react'
import styles from './Input.module.css';

const Input = ({ message , setMessage, sendMessage }) => {
  return (
    <form>
        <input className={styles.input}
        type="text"
        placeholder='Type a message...'
        value={message}
        name="message"
        onChange={({ target : {value} })=> setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) :  null} />
    <button className={styles.sendButton} onClick={(event) => sendMessage(event)}> Send </button>
    </form>


  )
}

export default Input