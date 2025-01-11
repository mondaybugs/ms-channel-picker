import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

<script src="//cdnjs.cloudflare.com/ajax/libs/seedrandom/3.0.5/seedrandom.min.js"></script>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
