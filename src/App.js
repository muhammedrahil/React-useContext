import React,{useState} from 'react'
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom'
import About from './componece/About'
import Contact from './componece/Contact'
import {Appcontext} from './AppContext'


function App() {
  const [state,setState]=useState(40)
  return (
    <div>
      <BrowserRouter>
        <Link to={'/about'}>about</Link>
        <Link to={'/contact'}>Contact</Link>
        <Appcontext.Provider value={{data:state}}>
        <Routes>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
        </Routes>
        </Appcontext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
