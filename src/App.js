import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let tyt = {color : 'yellow',fontSize : '30px'}
  let posts = "강남 고기 맛집"
  var [a,b] = [10,100];
  let [글제목,글제목변경] = useState('남자 코트 추천');
  //let [글제목,글제목변경] = useState('남자코트추천');
  return (
    <div className="App">
      <div className="black-nav">
        <div style={tyt}>개발 blog</div>
      </div>
      <div className="list">
        <h3>{글제목}</h3>
        <p>3월 29일 발행</p>
        <hr/>

      </div>
    </div>
  );
}

export default App;
