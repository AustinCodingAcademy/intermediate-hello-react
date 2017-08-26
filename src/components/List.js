import React from 'react';
import Contact from './Contact';
import './List.css';

const List = (props) => {

  return (

    <ul className="list">
      {
        props.contacts
          .map((contact, index) =>
            <Contact
              contact={contact}
              key={index}
              className="contact"
            />
          )
      }
    </ul>

  );

};

export default List;
