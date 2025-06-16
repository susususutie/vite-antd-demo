import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreProvider from './stores/StoreProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <App />
      <div id='portal-root'></div>
    </StoreProvider>
  </StrictMode>
)
