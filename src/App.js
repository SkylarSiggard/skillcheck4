import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import Routes from './routes'


function App() {
  return (
    <div className="App">
      <Nav 
      // location={this.props.location}
      />
      <div>
      {Routes}
      </div>
    </div>
  );
}

export default App;
