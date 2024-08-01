import React from "react";
import { styled } from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";

function MainPage() {
    return(
       <MainWrapDiv>
        <HeaderDiv>
            <LogoDiv></LogoDiv>
            <SearchBoxDiv></SearchBoxDiv>
            <UserDiv>
                <BsFillPersonFill className="icon" />
                <BsFillQuestionCircleFill className="icon" />
            </UserDiv>
        </HeaderDiv>
       </MainWrapDiv>
    );
}

export default MainPage;

const MainWrapDiv = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const HeaderDiv = styled.div`
    width: 100%;
    height: 100px;
    background-color: #000;
    display: flex;
    justify-content: space-around;
`

const LogoDiv = styled.div`
    background-color: red;
`
const SearchBoxDiv = styled.div`
    background-color: blue;

`

const UserDiv = styled.div`
    border: 3px solid yellow;
    
    .icon {
        color: #fff;
        font-size: 30px;
    }
`