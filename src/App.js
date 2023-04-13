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
        <div>My Blog</div>
      </div>

      <div className='list'>
      <button onClick={ sort }>클릭하면 정렬됨</button>
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
    </div>
  );
}

export default App;
