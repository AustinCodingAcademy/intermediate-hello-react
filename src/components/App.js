import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import SubHeader from './SubHeader';
import SubSub from './SubSub';
import UserProfile from './UserProfile.js';
import Users from '../randomUsers.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Users.users,
    }
  }

  render() {
    return (
      <div>
        <div className="head">
          <Header/>
          <SubHeader/>
          <SubSub/>
        </div>
        <UserProfile user={this.state.user}/>
      </div>
    );
  }
}



export default App;
