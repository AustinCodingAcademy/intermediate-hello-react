import React from 'react'
import User from './User'

const renderUsers = (users) => {

  const { results } = users

  return results.map(
    ({ name, picture }, index) =>
      <User
        key={index}
        name={name}
        picture={picture}
        index={index}
      />
  )

}

const ListOfUsers = ({ users }) => {

  return (
    <ul>
      {renderUsers(users)}
    </ul>
  )

}

export default ListOfUsers
