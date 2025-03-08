import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock/Clock'
import Calendar from './components/Calendar/Calendar'

function App() {
  return (
    <>
      <div id="mainFrame">
        <Clock />
        <Calendar />
      </div>
    </>
  )
}

export default App
