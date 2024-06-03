import React from 'react';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent';
import ArrayPage from './pages/ArrayPage';
import FirstButton from './pages/FirstButton';
import SecondButton from './pages/SecondButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path = "/" element = {<MyFirstComponent/>}/> 
        <Route path = "/array" element = {<ArrayPage/>}/> 
        <Route path = "/button" element = {<FirstButton/>}/>
        <Route path = "/button2" element = {<SecondButton/>}/>
        <Route path = "/todo" element = {<TodoPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
