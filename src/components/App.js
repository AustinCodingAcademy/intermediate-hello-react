import React from 'react';
import './App.css';
import Users from '../sampleUser.json';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    users: Users.results,
  };
}

  render () {
  return  (
    <div>
      <h1 className="app-header">Hello DeMarco</h1>
    </div>
  );
}
}

export default App;
