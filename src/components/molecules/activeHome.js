import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import HomeLogoActive from '../atoms/homeActive';

export default function ActiveMain() {
  return (
      <Wrapper>
        <Link href="/">
        <a>
          <HomeLogoActive/>
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
`;