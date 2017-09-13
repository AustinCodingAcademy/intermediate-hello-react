import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ListOfUsers from './ListOfUsers'
import { fetchUsersAction } from '../redux/api'
import User from '../sampleUser.json'
import Users from '../randomUsers.json'
import './App.css'

const App = (props) => {
  return (
    <div>
      <h1 className="app-header">Hello Zac</h1>
      <ListOfUsers
        users={Users}
      />
      <button
        onClick={props.fetchUsers}
      >Click</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  api: state.users,
})
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: bindActionCreators(fetchUsersAction, dispatch),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
