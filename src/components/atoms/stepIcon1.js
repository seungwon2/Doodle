import React from 'react';
import styled from 'styled-components';


export default function StepIcon1() {
  return (
      <Wrapper>
          <IconImage src='/logo.png' width="10%"/>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 5vh;
  align-item: right;
  width:100%;
`;
const IconImage = styled.img`

`;
