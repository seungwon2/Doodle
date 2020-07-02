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
  width: 100%;
  height: 13vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 0;
  box-shadow: 0px -5px 20px 0px rgb(0 0 0, 0.11) inset;
`
