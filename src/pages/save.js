import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import image
import savelogo from '../savelogo.png'
export default function Save() {
  const notepadvalue = localStorage.getItem("notepadvalue");
  const data = {
  title: "notepadx-빠르고 쾌적한 무료온라인메모장",
  text: notepadvalue,
  };
  const max = 10000
  const random = Math.floor(Math.random() * max)
  return (
    <>
     <a href="https://notepadx.netlify.app">
         <img src={savelogo} id ="savelogo" alt='저장/공유 등을 할려면 이버튼을 클릭해주세요.' />
     </a>
     <h3>공유</h3>
     <p>현재 작성한 노트를 공유하십시오.</p>
     <button id="share" onClick={()=>{navigator.share(data)}}><i class="fa-solid fa-share-nodes"></i></button>
     <hr></hr>
     <Update title="메모의 중요성" description="메모의 중요성은 단순히 정보를 저장하는 것 이상입니다. 메모는 우리가 경험하고 학습한 것을 체계적으로 정리하여, 이를 바탕으로 미래에 필요한 결정을 내릴 수 있게 합니다. 이는 특히 창업자나 비즈니스 리더에게서 중요한 역할을 합니다. 창의적인 아이디어나 문제 해결책을 기록함으로써, 이는 기업의 성장을 촉진하는 데 기여합니다.
또한, 메모는 개인적 발전과 정신 건강에도 긍정적인 영향을 미칩니다."></Update>
    <New description={random}></New>
    
 </>
  ) 
}

function Update({description , title}) {
  return(
    <div className='update'>
       <h2>{title}</h2>
       <h3>{description}</h3>
    </div>
  )
}

function New({description}) {
  return(
    <div className='new'>
       <h2>{description}</h2>
       <h3>랜덤의 중요성,랜덤은 위에 숫자처럼 우리 일상에 다양한 면을 차지하고있습니다.보안,컴퓨팅,리버스 엔지니어링,게이밍 개발,코딩 등 다양한 분야에서 사용되는 필수적인 요소입니다.</h3>
    </div>
  )
}