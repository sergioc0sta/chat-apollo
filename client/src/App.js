import React, { Component } from 'react';
import { getLoggedInUser, logout } from './auth/auth';
import Chat from './components/chat';
import Login from './components/login';
import NavBar from './components/navbar';

class App extends Component {
  state = {user: getLoggedInUser()};

  handleLogin(user) {
    this.setState({user});
  }

  handleLogout() {
    logout();
    this.setState({user: null});
  }

  render() {
    const {user} = this.state;
    if (!user) {
      return <Login onLogin={this.handleLogin.bind(this)} />;
    }
    return (
      <div>
        <NavBar onLogout={this.handleLogout.bind(this)} />
        <Chat user={user} />
      </div>
    );  
  }
}

export default App;
