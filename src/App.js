import React, { useState } from 'react';
import './App.css';
// styled-components 로드
import styled from 'styled-components';

// 네이게이션바 Component 
function Nav() {
  return(
    <div className="black-nav">
        <div className='title'>vellalog</div>
        <div className='profile'>profile</div>
    </div>
  )
}

class Modal extends React.Component {
  render() {
    return(
    <div className='modal'>
      <h2>{this.props.title}</h2>
      <p>홀홀홀...</p>
      <p>리액트를 찍먹해봅시다...</p>
    </div>
    );
  }
}

function Content() {
  return (
    <div>
        <h3>제목
          <span className='heart'>❤︎ 공감</span>
          <span className='heartCount'>1</span>
        </h3> 
        <p>내용...</p>
    </div>
  )
}

const SortButton = styled.button`
  border: 1px solid rgba(55, 53, 47, 0.16);
  border-radius: 15px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: rgba(55, 53, 47, 0.65);
  padding: 5px 8px 5px 8px;
  margin-right: 5px;
  &:hover{
    background-color: #eee;
  }
`;

const UpdateTitleButton = styled(SortButton)``;

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

  function ButtonDiv() {
    return(
      <div className='btnDiv'>
          <SortButton onClick={ sort }>가나다 ⬇</SortButton>
          <UpdateTitleButton onClick={ updateTitle }>불고기</UpdateTitleButton>
          {/* <button className='sortBtn' onClick={ sort }>가나다 ⬇</button>
          <button className='updateTitleBtn' onClick={ updateTitle }>불고기</button> */}
        </div>
    )
  }

  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <Nav></Nav>

      {/* 정렬 버튼, 불고기 버튼 */}
      <ButtonDiv></ButtonDiv>
      
      <div className='list'>
        <Content></Content>
        <h3>{ titles[0] }
          <span className='heart' onClick={()=>{ willUpdateCount(count+1) }}>❤︎ 공감</span>
          <span className='heartCount'>{count}</span>
        </h3> 
        <p>홀홀홀...</p>
        
        <Modal title={titles[0]} />

        <hr/>
        <h3>{ titles[1] }</h3> 
        <p>홀홀홀...</p>
        <Modal title={titles[1]} />
        <hr/>
        <h3>{ titles[2] }</h3> 
        <p>홀홀홀...</p>
        <Modal title={titles[2]} />
        <hr/>
      </div>


    </div>
  );
}

export default App;

