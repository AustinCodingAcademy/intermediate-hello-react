import React from 'react';

const Header = (props) => {

  return (
    <div>
      <h1 className="app-header">React Contact List</h1>
      <h2 className="app-subheader">There are {props.contacts.length} contacts on this list.</h2>
    </div>
  );

};

export default Header;
