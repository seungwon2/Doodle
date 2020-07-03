import React from 'react';
import styled from 'styled-components';

export default function OrderTitle({step, text}) {
  return (
      <Wrapper>
          <Label>Step{step}</Label>
          <Label>{text}</Label>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-bottom: 3vh;
`;
const Label = styled.label`
 color: rgb(69,69,69);
 font-size: 1.563rem;
 padding-left: 5vw;
 width: 100%;
  `