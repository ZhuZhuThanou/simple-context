import React from 'react';

import MyToDo from './pages/MyToDo';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <MyToDo />
    </div>
  );
}

export default App;
