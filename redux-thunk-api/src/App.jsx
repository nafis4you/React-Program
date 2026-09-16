import { useState } from 'react'
import './App.css'
import Product from './component/Product'
import MyCart from './component/MyCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product />
      <MyCart />
    </>
  )
}

export default App
