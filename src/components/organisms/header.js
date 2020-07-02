import React from 'react';
import styled from 'styled-components';
import LeftArrow from '../atoms/leftArrow';

export default function Header({title}) {
  return (
      <Wrapper>
          <LeftArrow/>
          <Title>{title}</Title>
          <Home>홈</Home>
      </Wrapper>
  );
}
const Wrapper = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
color: rgba(0, 0, 0, 0.65);
font-size: 14px;
font-variant: tabular-nums;
line-height: 1.5715;
list-style: none;
font-feature-settings: 'tnum', "tnum";
position: relative;
padding: 16px 24px;
background-color: #fff;
width: 100%;
`;
const Title = styled.label`

`;
const Home = styled.label`

`;