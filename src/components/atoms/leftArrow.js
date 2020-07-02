import React from 'react';
import styled from 'styled-components';


export default function LeftArrow() {
  return (
      <Wrapper>
          <IconImage src='/leftArrow.png'/>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 1.25rem;
  display: flex;
  align-items: center;
`;
const IconImage = styled.img`
  height: 1.25rem;
`;
