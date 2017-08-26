import React from 'react';
import { withState } from 'recompose';
import axios from 'axios';
import Header from './Header';
import randomUsers from '../randomUsers';
import List from './List';
import './App.css';

const URL = (results = 25) =>
  `https://randomuser.me/api?results=${results}`;


const { users: dummyUsers } = randomUsers;

const App = withState('contacts', 'fetchContacts', { users: [] })(
  ({ contacts: { users }, fetchContacts }) =>
    <div className="App">
      <Header
        contacts={users.length ? users : dummyUsers}
      />
      <button
        onClick={() =>
          axios.get(URL(parseInt(Math.random() * 100, 10)))
          .then(res =>
            fetchContacts(({ users }) => ({
              users: res.data.results,
            })
            )
          )
          .catch(err => console.error(err))
        }
      >
        Fetch Contacts
      </button>
      <List
        contacts={users.length ? users : dummyUsers}
      />
    </div>
);

export default App;
