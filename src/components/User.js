// @flow
import React from 'react'

type Props = {
  name: Object,
  picture: Object,
  index: number,
}

export default ({
  name,
  picture,
  index,
  }: Props) =>
  <div key={index}>
    <li>{name.first} {name.last}</li>
    <img
      src={picture.thumbnail}
      alt={name.first}
    />
  </div>
