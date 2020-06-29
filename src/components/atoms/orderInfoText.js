import React from 'react';
import styled from 'styled-components';

export default function OrderInfoText() {
  return (
      <Wrapper>
          <Label>주문자</Label>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-left: 20%;
`;
const Label = styled.label`
  1.2rem;
  font-weight:bold;
  `