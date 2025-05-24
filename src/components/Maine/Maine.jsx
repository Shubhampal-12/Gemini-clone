import React, { useContext, useState, } from 'react'
import'./Maine.css'
import {SquareUserRound, Compass, Code, MessageSquare, Lightbulb, SendHorizontal, AudioLines, Gem, Upload} from 'lucide-react'
import { Context } from '../../context/Context'
import imag from '../../assets/logo.png';
 



const Maine = () => {

    const { onSent, recentPrompt , showResult, loading, resultData, setInput, input, handleKeyDown } = useContext(Context)
    const [selectedFile, setSelectedFile] = useState(null);
    

    const handleClick = () => {
        document.getElementById("hiddenInput")?.click();
      };
      const handleChange = (e) => {
        setSelectedFile(e.target.files[0]);
      };

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={imag} alt="" />          
        </div>

        
        <div className="main-container">


        {!showResult ?
            <>
             <div className="greet">
                <p><span>Hell0, Dev.</span></p>
                <p>How can I help you today</p>
             </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on upcoming road trip</p>
                    <Compass size={40} className='imag1'/>
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: uban planning</p>
                    <Lightbulb size={40} className='imag1'/>
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreact</p>
                    <MessageSquare size={40} className='imag1'/>
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <Code size={40} className='imag1'/>
                </div>
            </div>
            </>   
            : <div className='result'>
                 <div className="result-tittle">
                     <img src={imag} alt="" />
                    <p>{recentPrompt}</p>
                    
                 </div>
                 <div className="result-data">
                    <Gem className='img3' size={30}/>
                    {loading
                    ? <div className="loader">
                          <hr />
                          <hr />
                          <hr />
                    </div>
                    :<p className='font-weight: 900' dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }   
                 </div>
            </div>
        }
           
        <div className="main-bottom">
            <div className="search-box">
                <input   onChange={(e)=>setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text"  placeholder='Ask Gemini...' />
                   <div>
                   <input type="file" id="hiddenInput" hidden  />
                             <Upload onClick={handleClick} className="img2"/> 
                             {selectedFile && <p>File: {selectedFile.name}</p>}   
                        <AudioLines  className="img2"/>
                       {input ? <SendHorizontal onClick={()=>onSent()} className="img2"/>:null}  
                   </div>
            </div>
                <p className="bottom-info">
                     
                     Gemini may display inaccurate info, including about people,so double check its respones your privacy || Creacte by $hubhampal848
                </p>
                
        </div>
        </div>
    </div>
  )
}

export default Maine