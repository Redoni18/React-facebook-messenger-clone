import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'


const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;
    return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
        {/* className={isUser ? "message__userCard":"message__guestCard" ky if eshte vendos per me diktu se a eshte tu shkrujt ni user a guest 
        per me dite se qfare ngjyre me pas karta e tekstit (kalter a bardhe)*/}
        <Card className={isUser ? "message__userCard":"message__guestCard"}>
            <CardContent>
                {/* className={isUser ? "text__userCard":"text__guestCard"} ky if eshte vendos per me diktu se a eshte tu shkrujt ni user a guest 
                per me dite se qfare ngjyre me pas teksti (bardh a zi) */}
                <Typography className={isUser ? "text__userCard":"text__guestCard"} variant='h5' component='h2'>
                    {message.message}
                </Typography>
            </CardContent>
        </Card>
        <Typography color='textSecondary' variant='h6'>
            {/* nese useri nuk ka shkrujt emer/username ne prompt ateher ai tjerve ka me ju dal si unknown  */}
            {!isUser && `${message.username || 'Unknown'}`}
        </Typography>
        </div>

    )
})

export default Message
