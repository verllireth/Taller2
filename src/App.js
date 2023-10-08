import React from 'react';
import './css/main.css';
import { Route, Routes } from 'react-router';
import  {Information}  from './components/Information';
import  {Sidebar}  from './UI/Sidebar';
import {Register}  from './components/Register';
import {Home} from './components/Home';
import  {Assign}  from './components/Assign';



function App() {
  return (
    <div className='md:flex min-h-screen'>
      <Sidebar />
      <div>
        <Routes className='md:w-3/5 x1:w-4/5 p-6'> 
        <Route path='' element={<Home/>}></Route>
          <Route path='/singup' element={<Register/>}></Route>
          <Route path='/information' element={<Information/>}></Route>
          <Route path='/assign' element={<Assign/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
