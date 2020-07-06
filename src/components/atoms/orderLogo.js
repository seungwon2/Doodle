import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/svgFolder/make';

export default function OrderLogo() {
  return (
      <Wrapper>
          <Logo width="40%" height="fit content" color="yellow"/>
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