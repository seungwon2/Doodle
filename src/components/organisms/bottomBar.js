import React from 'react';
import styled from 'styled-components';

import Main from '../molecules/home.js';
import Make from '../molecules/make.js';
import Mypage from '../molecules/mypage.js';
import ActiveMain from '../molecules/activeHome.js';
import ActiveMake from '../molecules/activeMake.js';
import ActiveMypage from '../molecules/activeMypage.js';


export default function BottomBar({active}) {
  if (active==="home"){
    return (
      <Wrapper>
        <Phantom/>
        <Bar>
          <ActiveMain/>
          <Make/>
          <Mypage/>
        </Bar>
      </Wrapper>
  );
  }
  else if (active==="make"){
    return (
      <Wrapper>
        <Phantom/>
        <Bar>
          <Main/>
          <ActiveMake/>
          <Mypage/>
        </Bar>
      </Wrapper>
  );
  }
  else {
    return (
      <Wrapper>
        <Phantom/>
        <Bar>
          <Main/>
          <Make/>
          <ActiveMypage/>
        </Bar>
      </Wrapper>
  );
  }
  
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const Bar = styled.div`
  max-width: 100%;
  height: 13vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 0;
  box-shadow: 0px, -5px, 20px, 0px, rgb(0 0 0, 0.11);
  position: fixed;
  flex-shrink: 0;
  background-color: white;
  padding-left:13%;
  padding-right:13%;
`
const Phantom = styled.div`
  display: block;
  padding: 20px;
  height: 14vh;
  width: 100%;
`;
