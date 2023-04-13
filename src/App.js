import React, { useState } from 'react';
import './App.css';

function App() {
  let [titles, willUpdateTitle] = useState(['블로그 만들기', '리액트다아', '호롤롤롤']);
  let [count, willUpdateCount] = useState(0);

  function updateTitle(bulgogi) {
    var newTitles = [...titles]; //Deep Copy
    newTitles[0] = '불고기 만들기';
    willUpdateTitle(newTitles);
  }  

  function sort() {
    var newTitles = [...titles];
    newTitles = newTitles.sort(); 
    willUpdateTitle(newTitles);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div className='title'>vellalog</div>
        <div className='profile'>profile</div>
      </div>

      <div className='btnDiv'>
        <button className='sortBtn' onClick={ sort }>가나다 ⬇</button>
      </div>
      
      <div className='list'>
        <h3>{ titles[0] } <span className='heart' onClick={()=>{ willUpdateCount(count+1) }}>❤︎</span> {count} </h3> 
        <p>홀홀홀...</p>
        <hr/>
        <h3>{ titles[1] }</h3> 
        <p>홀홀홀...</p>
        <hr/>
        <h3>{ titles[2] }</h3> 
        <p>홀홀홀...</p>
        <hr/>
      </div>

      {/* 컴포넌트 사용 */}
      <Modal />

    </div>
  );
}

//Component 생성
function Modal() {
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
