import '../App.css';
import { Link } from "react-router-dom";
//import image
import savelogo from '../savelogo.png'
export default function Save() {
  return (
    <>
     <Link to="/">
         <img src={savelogo} id ="savelogo" alt='저장/공유 등을 할려면 이버튼을 클릭해주세요.' />
     </Link>
     <h3>공유</h3>
     <p>현재 작성한 노트를 공유하십시오.</p>
     <button onClick={()=>{navigator.share()}}>공유</button>
     <hr></hr>
     
 </>
  )
}