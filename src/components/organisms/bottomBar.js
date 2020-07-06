import React from 'react';
import styled from 'styled-components';

import Main from '../molecules/home.js';
import Make from '../molecules/make.js';
import Mypage from '../molecules/mypage.js';
import ActiveMain from '../molecules/activeHome.js';
import ActiveMake from '../molecules/activeMake.js';
import ActiveMypage from '../molecules/activeMypage.js';


export default function BottomBar({active}) {
  return(<NewWrapper>
    <ActiveMain/>
          <Make/>
          <Mypage/>
  </NewWrapper>)
}

const NewWrapper = styled.div`
  max-width:36rem;
  width:100%;
  padding: 1.38rem 3.6rem 1.8rem 3.6rem;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  position:fixed;
  bottom : 0px;
  background-color:white;
`;

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
