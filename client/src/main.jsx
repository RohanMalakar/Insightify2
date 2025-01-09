
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Header from './Componets/Header.jsx'
import Footer from './Componets/Footer.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <Header />
      <App />
      <Footer />
   </BrowserRouter>
)
