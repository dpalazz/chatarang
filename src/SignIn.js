import React from 'react'

const SignIn = (props) => {

  const handleSubmit = (ev) => {
    ev.preventDefault()
    props.signedIn = !props.signedIn
  }

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username"/>
        <button type="submit" onSubmit={() => this.handleSubmit()}>Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
