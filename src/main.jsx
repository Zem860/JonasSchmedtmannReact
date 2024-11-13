import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './style.css'
// import App from './App.jsx'
import StarRating from './StarRating'
import StarTest from './StarTest'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10}/>
    <StarRating maxRating={10} size={24} color={"#12bac9"} defaultRating = {3}/>
    <StarTest />
  </StrictMode>,
)
