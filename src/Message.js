import React from 'react'

const Message = (props) => {
  return (
    <div className="Message" style={styles}>
      {props.message.userName}: {props.message.body}
    </div>
  )
}

const styles = {
    flex: '1',
    paddingLeft: '0.5rem',
  }

export default Message
