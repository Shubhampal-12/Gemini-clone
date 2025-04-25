import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContentProvider = (props) => {


  const handleKeyDown = (e) => {  
    if (e.key === "Enter" && input.trim() !== "" && !loading) { /// Add the Enter button
      onSent();
    }
  }
  

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState(" ");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");


 const  delaypara =(index,nextWord)=>{
  
  setTimeout(function () {
     setResultData(prev=>prev+nextWord);
   },75*index)
 }

 const newchat = ()=>{
    setLoading(false)
    setShowResult(false)
 }


  const onSent = async (prompt) => {

    setResultData("")
    setLoading(true)
    setShowResult(true)
    let respones;
    if (prompt !== undefined) {
      respones= await runChat(prompt)
      setRecentPrompt(prompt)
    }
    else{
      setPrevPrompt(prev=>[...prev,input])
      setRecentPrompt(input)
      respones = await runChat(input)
    }
 
   let responesArray = respones.split("**");
   let newResponse= "";
     for(let i=0 ; i < responesArray.length; i++)
      {
        if (i === 0 || i%2 !== 1) {
          newResponse += responesArray[i];
        } else {
          newResponse += "<b>"+responesArray[i]+"</b>";
        }
      }
   let newResponse2 = newResponse.split("*").join("</br>")
   let newResponseArray = newResponse2.split(" ");
   for (let i = 0; i < newResponseArray.length; i++) {
    
    const nextWord = newResponseArray[i];
    delaypara(i,nextWord+" ")
    
   }
   setLoading(false)
   setInput("")


  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    setShowResult,
    loading,
    resultData,
    setResultData,
    onSent,
    newchat,
  handleKeyDown,
  };

  return <Context.Provider value={contextValue}>
    {props.children}
    </Context.Provider>;
};

export default ContentProvider;
