import React,{useState} from 'react'
import {Link} from "react-router-dom";

import styles from './Join.module.css';

export default function Join () {
  const [name,setName] = useState('');
  const [room,setRoom] = useState('');
  
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.heading}>Join the Chat</h1>
        <div><input placeholder='Name' type='text'  className={styles.inputField} onChange={(event)=>setName(event.target.value)} /></div>
        <div><input placeholder='Room' type='text'  className={styles.inputField} onChange={(event)=>setRoom(event.target.value)} /></div>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={styles.button} type='submit'>Sign In</button>
        </Link>
      </div>
    </div>
  )
}

