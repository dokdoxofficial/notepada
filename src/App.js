
import { useState } from 'react';
import './App.css';

import { GoogleGenerativeAI } from "@google/generative-ai";




function App() {
  const [color, setcolor] = useState("white");
  const [value, setvalue]= useState("");
  const [status,setstatus] = useState()
  function handleClick() {
    const a = document.getElementById("fontsize");
    if (a) {
      const size = a.value;
      document.getElementById("notepadarea").style.fontSize = size + "pt";
    }
  }



   
    //ai test


        
 
  return (
    <div className="App">
         <h1>메모장-빠르고 쾌적한 무료메모장</h1>
         <div className='bar'>
         <button className='button' onClick={()=>{document.getElementById("notepadarea").style.fontSize="10pt"}}>폰트작게</button>
         <button className="button" onClick={()=>{document.getElementById("notepadarea").style.fontSize="30pt"}}>폰트크게</button>
         <input
          type='text'
          id="fontsize"
          placeholder='폰트크기를 입력하세요: (예. 10, 20 등)'
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleClick}>적용</button>
        <p>{status}</p>
   <input
          type='text'
          id="ai"
          placeholder='ai 에게 작성을 요구하세요. 예) 오늘 달빛에 대해 써줘 등'
          style={{ marginRight: "10px" }}
        />
        <button onClick={ai}>적기</button>
        <input type="color" onChange={e => setcolor(e.target.value)} />
     
         </div>
         <textarea id="notepadarea"style={{color:color}}></textarea>
         <a href="https://www.flaticon.com/free-icons/document" title="document icons">Document icons created by Freepik - Flaticon</a>
         
    </div>
  );
}

export default App;
