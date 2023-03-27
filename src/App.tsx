import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Help from './Components/Help/Help';
import Router from './Router';

function App() {
  return (
    <>
    <div className="App">
      <Help/>
      <Router/>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;
