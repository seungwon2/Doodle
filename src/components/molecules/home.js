import React from 'react';
import styled from 'styled-components';
import HomeLogo from '../atoms/homeLogo';
import Link from 'next/link';

export default function Main() {
  return (
      <Wrapper>
        <Link href="/">
        <a>
          <HomeLogo/>
          <Label>홈</Label>
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
  font-size: 0.8125rem;
`;