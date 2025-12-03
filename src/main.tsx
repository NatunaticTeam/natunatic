import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import MainHeader from './pieces/header.tsx'
import PageIndex from './pieces/index.tsx'

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <MainHeader />
    <PageIndex />
  </StrictMode>,
)

