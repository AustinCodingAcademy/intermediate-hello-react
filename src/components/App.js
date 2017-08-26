import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import List from './List';
import './App.css';

const URL = (results = 25) =>
  `https://randomuser.me/api?results=${results}`;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  getUsers (number) {

    return axios.get(URL(number))
      .then(res => {
        return this.setState({
          users: res.data.results,
        });
      })
      .catch(err => {
        console.error(err);
      });

  }

  componentWillMount() {

    return this.getUsers(28);

  }

  render() {

    return (

      <div className="App">
        <Header
          contacts={this.state.users}
        />
        <List
          contacts={this.state.users}
        />
      </div>

    );

  }

}

export default App;
