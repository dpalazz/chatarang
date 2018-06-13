import React from 'react'

import Avatar from './Avatar'

const UserInfo = () => {
  return(
    <div class="UserInfo" style={styles.userInfo}>
      <div class="UserInfo">
          <Avatar style={styles.avatar}/>
          <div style={styles.user} class="user">Davey</div>
          <a style={styles.a} href="#">
            <i class="fas fa-sign-out-alt"></i>
          </a>
        </div>
    </div>
  )
}

const styles = {
  userInfo: {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '0.5rem',
  },
  user: {
    flex: '1',
  },
  a: {
    border: '0',
    padding: '0',
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1.2rem',
    transition: 'color 0.25s ease-out',
  }
}
export default UserInfo
