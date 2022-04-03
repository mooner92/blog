/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let tyt = {color : 'yellow',fontSize : '30px'}
  let posts = "강남 고기 맛집"
  var [a,b] = [10,100];
  let [따봉,따봉변경] = useState(0);
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','건양대 인근 햄버거 맛집','건양대 근처 대물 낚시터','여자 코트 추천']);
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={tyt}>개발 blog</div>
      </div>
      <button onClick={제목바꾸기}>button</button>
      <div className="list">
        <h3>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}>👍🏿</span>{따봉}</h3>
        <p>3월 29일 발행</p>
        <hr/>

      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>3월 29일 발행</p>
        <hr/>

      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>4월 3일 발행</p>
        <hr/>

      </div>
      <div className="list">
        <h3>{글제목[3]}</h3>
        <p>4월 3일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>
      <Modal />

    </div>
  );
}
//component using
function Modal(){
  return(
    <>
      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>

      </div>
    </>
  )

}

export default App;
