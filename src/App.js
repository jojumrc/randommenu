import React from 'react';
import './App.css';
import Home from './Components/Home';
import Table from './Components/Table';
import { Divider } from '@mui/material';

function App() {
  return (
    <div className="App">
        <Home />
        <Divider orientation='vertical'/>
        <Table />
    </div>
  );
}

export default App;
