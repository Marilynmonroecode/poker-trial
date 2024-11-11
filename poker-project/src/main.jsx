import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GameSide from './Compontents/gameSide'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameSide />
  </StrictMode>,
)
