import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Motherboard from './components/Motherboard';
import Cpu from './components/Cpu';
import Gpu from './components/Gpu';
import Hdd from './components/Hdd';

function App() {
  return (
    <div className="App">
      <Router>
        <Motherboard path="/" />
        <Cpu path="/cpu" />
        <Gpu path="/gpu" />
        <Hdd path="/hdd" />
      </Router>
    </div>
  );
}

export default App;
