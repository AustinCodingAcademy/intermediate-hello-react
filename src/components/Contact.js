import React from 'react';

const Contact = (props) => {

  const {
    name,
    picture,
    location,
  } = props.contact;

  return (

    <div className="contact">
      <img
        className="img"
        src={picture.medium}
        alt={name.first}
      />
      <li className="li">
        {name.first}
        &nbsp;{name.last}
      </li>
      <li className="li">
        {location.city},&nbsp;{location.state}
      </li>
    </div>

  );

};

export default Contact;
