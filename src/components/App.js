import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import SubHeader from './SubHeader';
import SubSub from './SubSub';
import Paragraph from './Paragraph';
import UserProfile from './UserProfile.js';
import User from '../sampleUser.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: User.results,
    }
  }


  render() {
    return (
      <div>
        <Header/>
        <SubHeader/>
        <SubSub/>
        <Paragraph/>
        <UserProfile user={this.state.user}/>
      </div>
    );
  }
}



export default App;
