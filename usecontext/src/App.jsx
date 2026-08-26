import { useContext, useState } from 'react'
import { userContext } from './component/Customcontext'

function App() {
  const users = useContext(userContext);
  console.log(users);
  return (
    <>
    <ul>
      {users.map((user)=>(
        <li>{user.name}, {user.role}</li>
      ))}      
    </ul>
    </>
  )
}

export default App
