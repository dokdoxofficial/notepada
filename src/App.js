import { useState } from 'react';
import './App.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  //usestate
  const [color, setcolor] = useState("white");
  const [value, setvalue]= useState("필기");
  const [loading, setloading] = useState("");
  //variable
  const [va, setva] = useState(undefined);

  function handleClick() {
    const a = document.getElementById("fontsize");
    if (a) {
      const size = a.value;
      document.getElementById("notepadarea").style.fontSize = size + "pt";
    }
  }

  function ai() {
    const a = document.getElementById("ai")
  
  if (a) {
       const aivalue = a.value;
       setvalue(aivalue)
       setloading("로딩중:(")
       const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
       const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
       const prompt = value + "에 대한 글을 199자 로 작성";
       model.generateContent(prompt)
       
  .then((response) => {
    const originaldata=localStorage.getItem("notepadvalue");
    const content = response?.response?.text();  
    document.getElementById("notepadarea").value= content +originaldata ;
    setloading("AI작성을 완료함:)");
    document.getElementById("loading").style.display="block";
  })
  }
}

// 0.5초마다 저장
setInterval(() => {
  const notepad = document.getElementById("notepadarea");
  if (notepad) {
    localStorage.setItem("notepadvalue", notepad.value);
     console.log("저장됨(5000ms)")
    setva("작성한 내용을 저장함:)")
  
  
  }
}, 5000);

// 페이지 로드 시 복원
window.addEventListener("load", () => {
  const notepadvalue = localStorage.getItem("notepadvalue");
  if (notepadvalue !== null) {
    document.getElementById("notepadarea").value = notepadvalue;
    setva("저장된 내용을 불러옴:)")
  }
});


  return (
    <div className="App">
         <h1>메모장-빠르고 쾌적한 무료메모장</h1>
         <div className='loading' id ="loading">
          <h5>{loading}</h5>
          <h5>{va}</h5>
         </div>
         <div className='bar'>
         <button onClick={()=>{document.getElementById("notepadarea").style.fontSize="10pt"}}>글자작게</button>
         <button onClick={()=>{document.getElementById("notepadarea").style.fontSize="30pt"}}>글자크게</button>
         <input
          type='text'
          id="fontsize"
          placeholder='글자크기를 임력:예시)10,20 등'
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleClick}>적용</button>
        <input
          type='text'
          id="ai"
          placeholder='AI에게 도움을 받아작성을 해보세요.예시)오늘을 위한 시를 적어줘'
          style={{ marginRight: "10px" }}
        />
         <button onClick={ai}>작성요청</button>
         <input type="color" onChange={e => setcolor(e.target.value)} />
         
         </div>
         <textarea id="notepadarea"style={{color:color}}></textarea>  
         <h5>저작자표시</h5>
         <a href="https://www.flaticon.com/free-icons/document" title="document icons">Document icons created by Freepik - Flaticon</a>
 
    </div>
  );
}

export default App

