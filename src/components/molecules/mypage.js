import React from 'react';
import styled from 'styled-components';
import MypageLogo from '../atoms/mypageLogo';
import Link from 'next/link';

export default function Mypage() {
  return (
      <Wrapper>
         <Link href="/mypage">
           <a>
          <MypageLogo/>
          <Label>마이페이지</Label>
          </a>
          </Link>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;