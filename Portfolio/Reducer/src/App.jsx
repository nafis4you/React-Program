import { useState } from 'react'
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
