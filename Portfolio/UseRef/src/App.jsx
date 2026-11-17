import { useState } from 'react'
import './App.css'
import UseRef from './Component/UseRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseRef />
    </>
  )
}

export default App
