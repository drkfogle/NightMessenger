import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(['hello', 'hi'])
  console.log(input);
  console.log(messages);
  
  const sendMessage = (e) => {
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>NightMessenger</h1>
      <input value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={sendMessage}>Send</button>

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
