import React from 'react';
import './UserProfile.css';

function UserProfile(props) {
  console.log(props.user);
  return (
    <div className="usersAll">
      {props.user.map((bob, i) =>
        <div key={i} className="userCard">
          <h3>{bob.name.title}. {bob.name.first} {bob.name.last}</h3>
          <img src={bob.picture.large} alt={bob.name.first}/>
          <p>{bob.location.street},</p>
          <p>{bob.location.city}, {bob.location.state} {bob.location.postcode}</p>
        </div>
      )}
    </div>
  )

}

export default UserProfile;
