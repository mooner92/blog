import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let tyt = {color : 'yellow',fontSize : '30px'}
  let posts = "강남 고기 맛집"
  var [a,b] = [10,100];
  let [a,b] = useState('남자 코트 추천');
  return (
    <div className="App">
      <div className="black-nav">
        <div style={tyt}>개발 blog</div>
      </div>
      <div className="list">
        <h3>{posts}</h3>
        <p>3월 29일 발행</p>
        <hr/>

      </div>
    </div>
  );
}

export default App;
