import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TabView from './tab/tab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TabView/>
    </>
  )
}

export default App
