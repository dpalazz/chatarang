import React from 'react'

const Avatar = ({ user, style }) => {
  return (
    <div
      className="Avatar"
      style={{
        ...styles,
        ...style,
      }}
    ></div>
  )
}

const styles = {
  height: '40px',
  width: '40px',
  fontSize: '1rem',
  borderRadius: '20px',
}

export default Avatar
