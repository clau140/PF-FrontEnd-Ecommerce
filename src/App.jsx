import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Detail from './Detail'
import './App.css'

function App() {

  return (

    <div>
      <Routes>
      <Route path='/template/:id' Component= {Detail} />

      </Routes>


    </div>
      
    
  )
}

export default App
