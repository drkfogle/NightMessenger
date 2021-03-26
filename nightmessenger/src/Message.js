import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './Message.css' ;


function Message({message, user}) {
  const isUser = user === message.user

  return (
    <div className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard" }>
        <CardContent>
          <Typography 
            color="white"
            variant="h5"
            component="h2"
          >
            {message.user}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Message
