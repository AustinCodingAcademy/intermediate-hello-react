import React from 'react';
import { withState, compose, withHandlers } from 'recompose';
import axios from 'axios';
import Header from './Header';
import randomUsers from '../randomUsers';
import List from './List';
import './App.css';

const URL = (results = 25) =>
  `https://randomuser.me/api?results=${results}`;

const { users: dummyUsers } = randomUsers;

export default compose(
  withState('contacts', 'fetchContacts', { list: [], error: '' }),
  withHandlers({
    fetchContacts: ({ fetchContacts }) =>
      (e) => axios
        .get(URL(parseInt(Math.random() * 100, 10)))
        .then(res => fetchContacts(
          (contacts) => ({
            ...contacts,
            list: res.data.results,
          })
        ))
      .catch(error => fetchContacts(
        (contacts) => ({
          ...contacts,
          list: [],
          error,
        })
      )
    ),
  })
)(
  ({ contacts: { list, error }, fetchContacts }) =>
    <div className="App">
      <Header
        contacts={list.length ? list : dummyUsers}
      />
      <button
        onClick={fetchContacts}
      >
        Fetch Contacts
      </button>
      <List
        contacts={list.length ? list : dummyUsers}
      />
    </div>
);
