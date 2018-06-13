import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    user: {
      uid: null,
      userName: '',
    },
    signedIn: true,
  }

  render() {
    return (
      <div className="App">
        {
          this.state.signedIn
            ? <Main user={this.state.user} />
            : <SignIn signedIn={this.state.signedIn} />
        }
      </div>
    )
  }
}

export default App
