import React, { useState } from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import './App.css';

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  console.log(input);
  console.log(messages);
  
  const sendMessage = (e) => {
    e.preventDefault();
    
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>NightMessenger</h1>
      <FormControl>
        <InputLabel>Enter message here</InputLabel>
        <Input value={input} onChange={e => setInput(e.target.value)}/>
        <Button onClick={sendMessage} type='submit' variant='contained' color='secondary' disabled={!input}>Send</Button>
      </FormControl>

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
