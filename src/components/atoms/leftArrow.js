import React from 'react';
import styled from 'styled-components';


export default function LeftArrow() {
  return (
      <Wrapper>
          <IconImage src='/leftArrow.png' width="20%"/>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 20%;
  height: fit-content;
  display: flex;
  align-items: center;
`;
const IconImage = styled.img`
`;
