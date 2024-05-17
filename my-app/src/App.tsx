import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent';
import ArrayPage from './pages/ArrayPage';
import FirstButton from './pages/FirstButton';
import SecondButton from './pages/SecondButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path = "/" element = {<MyFirstComponent/>}/> 
        <Route path = "/array" element = {<ArrayPage/>}/> 
        <Route path = "/button" element = {<FirstButton/>}/>
        <Route path = "/button2" element = {<SecondButton/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
