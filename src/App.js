import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, updateTitle] = useState(['블로그 만들기', '리액트다아', '호롤롤롤']);
  let [count, updateCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>My Blog</div>
      </div>
      <div className='list'>
        <h3>{ title[0] } <span className='heart' onClick={()=>{ updateCount(count+1) }}>❤︎</span> {count} </h3> 
        <p>홀홀홀...</p>
        <hr/>
        <h3>{ title[1] }</h3> 
        <p>홀홀홀...</p>
        <hr/>
        <h3>{ title[2] }</h3> 
        <p>홀홀홀...</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
