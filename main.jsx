import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Day1 from './Day1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Day1 />
  </StrictMode>,
)