import React from 'react'

const Avatar = () => {
  return (
    <div className="Avatar">
      <div className="Avatar" style={styles}></div>
    </div>
  )
}

const styles = {
  avatar: {
    height: '40px',
    width: '40px',
    fontSize: '1rem',
    borderRadius: '20px',
    background: 'url(https://api.adorable.io/avatars/285/abott@adorable)' 
  }
}

export default Avatar
