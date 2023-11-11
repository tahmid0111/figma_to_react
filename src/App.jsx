

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route to='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
