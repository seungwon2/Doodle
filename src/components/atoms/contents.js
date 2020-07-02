import React from 'react';
import styled from 'styled-components';
import Header from '../../src/components/organisms/header';


export default function Contents({contents}) {
  return (
      <Wrapper>
          <Contents>{contents}</Contents>
      </Wrapper>
  );
}
const Wrapper = styled.div`
    width:100%;
`;

