import React from 'react';
import styled from 'styled-components';

export default function OrderLogoActive() {
  return (
      <Wrapper>
          <LogoImage src='/makeActive.png'/>
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
