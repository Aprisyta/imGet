import React from 'react';
import './App.css';
import NavBar from './NavBar'
import ResultBar from './ResultBar'
import UploadImage from './UploadImage'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <UploadImage />
      <ResultBar />
    </div>
  );
}

export default App;
