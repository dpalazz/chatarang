import React from 'react'

import Avatar from './Avatar'

const Message = (props) => {
  return (
    <div className="Message" style={styles}>
    <Avatar />
      {props.message.userName}: {props.message.body}
    </div>
  )
}

const styles = {
    flex: '1',
    paddingLeft: '0.5rem',
  }

export default Message
