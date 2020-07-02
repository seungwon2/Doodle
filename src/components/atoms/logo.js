import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Logo() {
  return (
      <Wrapper>
          <Link href="/">  
          <LogoImage src='/logo.png'/>
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
const LogoImage = styled.img`
  width: 20%;
`;
