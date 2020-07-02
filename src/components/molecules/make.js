import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import OrderLogo from '../atoms/orderLogo'

export default function Make() {
  return (
      <Wrapper>
         <Link href="/order/step1" as="/order/step1">
           <a>
          <OrderLogo/>
          <Label>만들기</Label>
          </a>
          </Link>
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
const Label = styled.label`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;