import { FormControl, Input, IconButton  } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('')

  //useEffect runs code when the page loads on a condition
  
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    //kodi qe ekzekutohet
    // nese [] eshte e thate ateher ky kod ekzekutohet veq 1 here, kur kompnenti hapet (ose bohet refresh)
    setUsername(prompt('Enter your name: '))
  }, []) //kushti -- dependencies(condition)

  const sendMessage = (Event) => {
    //kejt logjika per mesazhe shkruhet ktu
    Event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img className='app__logo' src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'></img>
      <h1>Messenger clone</h1>
      <h3>Welcome {username}</h3>

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input className='app__input' placeholder='type a message...' value={input} onChange={Event => setInput(Event.target.value)} />
          <IconButton className='app__iconButton' disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
