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
     <h3>업데이트/버전/지원</h3>
     <div id="update">
      <h4>새로워진 업데이트에 대해 알려드리겠습니다.1.dokdox notepad 와 실질적 형식적으로 완전 분리 2.notepadx 업데이트 체계 완료 3.기여자 포괄적 관리 제품에 대한 업데이트는 다음과 같습니다.
        1.공유기능 을 사용할수있습니다.(현재 일부기능 불완전) 2.인쇄 기능을 더 편리하게 사용할수있습니다.기존 cmd + p 또는 ctrl + p 에서 이제 인쇄하기 버튼을 클릭할수있습니다.3.기타 버그 개선(env 노출버그를 완전히 제거하였습니다!) 요약:
        새로운 수준의 사용자경험으로 끌어올려 사용자에게 간단하면서도 새로운 경험을 느낄수있게 함. 마무리:앞으로도 더 새로워진 notepadx 로 만나봅시다!
</h4>
     </div>
     
 </>
  )
}