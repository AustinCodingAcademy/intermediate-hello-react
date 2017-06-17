import React from 'react';

function UserProfile(props) {
  console.log(props.user);
  return (
    <div>
      {props.user.map((bob, i) =>
        <div key={i}>
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
