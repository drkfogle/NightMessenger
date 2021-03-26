import React, { useState, useEffect } from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import Message from './Message'
import './App.css';

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
  {user: 'jesus', text:'hey'}, 
  {user: 'gary', text:'sup'}, 
  {user: 'mike', text:'hello'}])
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(prompt('Please enter UserID'))
  }, [])
  
  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, {user: user, text: input}
    ]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>NightMessenger</h1>
      <h2>Welcome {user}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter message here</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)}/>
          <Button onClick={sendMessage} type="submit" variant='contained' color='secondary' disabled={!input}>Send</Button>
        </FormControl>
      </form>  
      {messages.map(message => (<Message user={user} message={message} /> ))}
    </div>
  );
}

export default App;
