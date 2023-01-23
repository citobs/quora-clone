import React from 'react';
import './App.css';
import Quora from './Quora';
import Navbar from './Navbar';
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="App">
      {
        user ? (<Quora/>) : (<Login/>)
      }
      <Quora/>
   
    </div>
  );
}

export default App;
