import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Reducer from './assets/component/Reducer'
import PrevNextReducer from './assets/component/PrevNextReduser'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Reducer />
      <hr/>
      <PrevNextReducer />
    </>
  )
}

export default App
