import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './pieces/app.tsx'

const mainRoot = createRoot(document.getElementById('main')!)

mainRoot.render(
  <StrictMode>
    {/* well this is actually the header file, but since here lies the router and stuff i call it app */}
    <App />
  </StrictMode>
)
