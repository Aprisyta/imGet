import React, { Component } from 'react';
import './App.css';
import ResultBar from './ResultBar'
import UploadImage from './UploadImage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UploadImage />
        <ResultBar />
      </div>
    );
  }
}

export default App;
