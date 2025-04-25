 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContentProvider from './context/Context.jsx'
import Maine from './components/Maine/Maine.jsx'
 
 
 


createRoot(document.getElementById('root')).render(
     <ContentProvider>
       <App/>
       <Maine/>
     </ContentProvider> 
)
