import React from 'react';
import styled from 'styled-components';

export default function AddressText() {
  return (
      <Wrapper>
          <Label>주소</Label>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-left: 20%;
`;
const Label = styled.label`
  1.2rem;
  `