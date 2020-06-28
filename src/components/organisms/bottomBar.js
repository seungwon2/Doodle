import React from 'react';
import styled from 'styled-components';
import Home1 from '../molecules/home.js';
import Make from '../molecules/make.js';
import Mypage from '../molecules/mypage.js';

export default function BottomBar() {
  return (
      <Wrapper>
          <Home1/>
          <Make/>
          <Mypage/>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  width: 55%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 0;
`;