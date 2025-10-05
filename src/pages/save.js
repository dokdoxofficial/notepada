import '../App.css';
import { Link } from "react-router-dom";
//import image
import savelogo from '../savelogo.png'


export default function Save() {
  const notepadvalue = localStorage.getItem("notepadvalue");
  const data = {
  title: "notepadx-빠르고 쾌적한 무료온라인메모장",
  text: notepadvalue,
  };
  return (
    <>
     <Link to="/">
         <img src={savelogo} id ="savelogo" alt='저장/공유 등을 할려면 이버튼을 클릭해주세요.' />
     </Link>
     <h3>공유</h3>
     <p>현재 작성한 노트를 공유하십시오.</p>
     <button onClick={()=>{navigator.share(data)}}>공유</button>
     <hr></hr>
     <div id = "setting"></div>
     <h3>새로운 메모를 추가(새창에서)</h3>
     <a href='https://notepadx.netlify.app' target='_blank' without rel="noreferrer" >빠른 추가</a>
     <hr></hr>
     <div id="update">
      <h3>새로운 기능</h3>
      <h4>이제 여러분의 메모를 다른이에게 공유해보세요.</h4>
     </div>
     
 </>
  )
}