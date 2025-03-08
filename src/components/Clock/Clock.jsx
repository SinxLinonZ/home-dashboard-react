import { useState, useEffect } from 'react'
import './Clock.css'

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { hour12: false }))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="clock">
      {time}
    </div>
  )
}

export default Clock