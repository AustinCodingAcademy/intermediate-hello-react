import React from 'react'

export default ({name, picture, index}) =>
  <div key={index}>
    <li>{name.first} {name.last}</li>
    <img
      src={picture.thumbnail}
      alt={name.first}
    />
  </div>
