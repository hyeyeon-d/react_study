import React from "react";
import styled, {css} from "styled-components";
import GlobalStyles from "../GlobalStyles";

// ul태그로 구성된 컴포넌트 정의 --> styled.태그이름``;
const MyGridContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 1024px;
    border: 5px solid #cc0;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const MyGrideItem = styled.li`
    width: ${props => props.width};
`
const MyBox = styled.div`
    border: 3px dotted #000;
    background-color: #eee;
    height: 100px;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    /* props.color가 있으면 반환하고 없으면 red로 색상 변경 */
    color: ${(props) => props.color || 'red'};

    &:hover {
        transform: scale(1.05, 1.05) rotate(-10deg);
        background-color: ${(props) => props.color || '#eee'};
        color: #fff; 
    }

    ${(props) =>
    // 앞에 조건이 참이면 뒤에 값을 적용시킨다.
        props.number % 2 === 1 &&
        css `
            font-weight: bold;
            font-style: italic;
            text-decoration: underline;
        `
    };

    /* 위 코드와 같은 말 */
    /* ${(props) => {
        if(props.number % 2 === 1){
            return css`
                font-weight: bold;
                font-style: italic;
                text-decoration: underline;
            `
        }
    }} */
`
const StyledComponent = () => {
    const myColors = ['red', 'green','blue','purple','orange','yellow','pink'];
    // 배열전체를 100으로 봤을 때 하나 당 몇%인지 계산
    const myWidth = 100 / myColors.length + '%';
    return (
        <div>
            <GlobalStyles/>
            <h2>StyledComponent</h2>
            <br />
            <h3>단순 태그처럼 사용</h3>
            <MyGridContainer>
                <MyGrideItem width={'30%'}>
                    <MyBox>Item1</MyBox>
                </MyGrideItem>
                <MyGrideItem width={'10%'}>
                    <MyBox>Item2</MyBox>
                </MyGrideItem>
                <MyGrideItem width={'20%'}>
                    <MyBox>Item3</MyBox>
                </MyGrideItem>
                <MyGrideItem width={'15%'}>
                    <MyBox>Item4</MyBox>
                </MyGrideItem>
                <MyGrideItem width={'25%'}>
                    <MyBox>Item5</MyBox>
                </MyGrideItem>
            </MyGridContainer>
            <br />
            <h3>배열 원소를 활용한 컴포넌트 사용</h3>
            <MyGridContainer>
                {myColors.map((item, index) => {
                    return (
                        <MyGrideItem key={index} width={myWidth}>
                            <MyBox color={item} number={index}>
                                {item}
                            </MyBox>
                        </MyGrideItem>
                    )
                })}
            </MyGridContainer>
        </div>
    )
}

export default StyledComponent;