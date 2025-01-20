import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Ensure we have the root element
const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

// Create and render the app
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)