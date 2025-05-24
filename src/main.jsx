 
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ContentProvider from './context/Context.jsx'
import Maine from './components/Maine/Maine.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
 
 
 


createRoot(document.getElementById('root')).render(
     <ContentProvider>
       {/* <App/> */}
       <Sidebar/>
       <Maine/>
     </ContentProvider> 
)
