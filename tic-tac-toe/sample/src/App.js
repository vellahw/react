import './App.css';
import styled from 'styled-components'

function App() {
  return (
    <Body>
      <div className='top'>
        <Title>010-1111-2222</Title>
        <Sub>나의 QR 코드</Sub>
      </div>
      <div className='content'>
        <Nemo></Nemo>
        <Nemo></Nemo>
      </div>
      <div className='bottom'>

      </div>
    </Body>
  );
}

export default App;

const Body = styled.div`
  font-family: 'NanumSquareNeo';
  text-align: center;
  background-color:#432C20;
`;

const Title = styled.div`
  padding-top:116px;
  font-size: 26px;
  text-align: center;
  color: #f6f290;
`;

const Sub = styled(Title)`
  font-size: 14px;
  padding-top: 20px
`;

const Nemo = styled.input`
  border: 2px solid #F6F290;
  color: #F6F290;
  background-color: #432C20;
  width: 322px;
  height: 60px;
  border-radius: 30px;
`;

