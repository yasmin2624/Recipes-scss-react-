import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss';
import App from './App.jsx'
import CategoriesProvider from './Context/CategoriesContext.jsx'
import MealsProvider from './Context/MealsContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoriesProvider>
    <MealsProvider>
    <App />
    </MealsProvider>
    </CategoriesProvider>
    
  </StrictMode>,
)
