import React, { useContext, useState } from 'react'
import"./Sidebar.css"
import {AlignJustify, Plus, MessageSquare, CircleHelp, History, Settings } from 'lucide-react'
import { Context } from '../../context/Context'
 

const Sidebar = () => {

const [extended, setExtended] = useState(false)
 const{onSent,prevPrompt, setRecentPrompt, newchat} = useContext(Context)

 const loadprompt = async (prompt)=>{
   setRecentPrompt(prompt);
   await onSent(prompt)
 }

  return (
    <div className='sidebar'>
         <div className="top">
           <AlignJustify color='black' onClick={()=>{setExtended(prev=>!prev)}} className='menu'/>
              <div onClick={()=>newchat()} className="new-chat">
                 <Plus className='img'/>
                {extended? <p>New Chat</p>:null}
             </div>
             {extended 
             ?<div className="recent">
              <p className="recent-tittle">Recent</p>
              {prevPrompt.map((item,index)=>{
                 return(
                  <div onClick={()=>loadprompt(item)} className="recent-entry">
                     <MessageSquare className='img'/>
                     <p>{item.slice(0,18)}...</p>
                  </div>
                 )
              })}
               
            </div>
             :null
            }
             
         </div>
         <div className="bottom">
          <div className="bottom-item recent-entry">
             <CircleHelp className='img'/>
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
             <History className='img'/>
             {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
             <Settings className='img'/> 
             {extended ? <p>Settings</p> : null}
          </div>
           
          
         </div>
    </div>
  )
}

export default Sidebar