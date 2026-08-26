import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Customcontext from './component/Customcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Customcontext>
      <App />
    </Customcontext>
  </StrictMode>,
)
