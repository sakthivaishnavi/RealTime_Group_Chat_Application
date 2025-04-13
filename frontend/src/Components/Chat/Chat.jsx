import React, {useState, useEffect} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router';
import styles from './Chat.module.css';

let socket;

const Chat = () => {
  const location = useLocation();
  const [name,setName] = useState('');
  const [room,setRoom] = useState('');
  const [message, setMesssage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:5000';

  useEffect(()=>{
    const { name,room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit('join', {name, room}, () => {

    });
    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  },[ENDPOINT,location.search ]);


  useEffect(() => {
    socket.on('message',(message) =>{
      setMessages([...messages,message]);
    })
  },[messages])


  return (
    <div className={styles.outerContainer}>
        <div className={styles.Container}>
          <input value={message}
          onChange={(event)=> setMessages(event.target.value)}/>
          
        </div>
    </div>
  )
}

export default Chat