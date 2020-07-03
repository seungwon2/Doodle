import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Banner() {
  return (
      <Wrapper>
          <Link href='order'>
          <a>
          <LogoImage src='/example.png'/>
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
  margin-top: 2vh;
  margin-bottom: 2vh;
`;
const LogoImage = styled.img`
  width: 100%;
`;
