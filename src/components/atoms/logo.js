import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Logo() {
  return (
      <Wrapper>
          <LogoImage src='/logo.png'/>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;
const LogoImage = styled.img`
  width: 26%;
`;
