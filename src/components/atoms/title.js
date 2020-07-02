import React from 'react';
import styled from 'styled-components';
import Header from '../../src/components/organisms/header';


export default function Title({title}) {
  return (
      <Wrapper>
          <Title>{title}</Title>
      </Wrapper>
  );
}
const Wrapper = styled.div`
    width:100%;
`;
