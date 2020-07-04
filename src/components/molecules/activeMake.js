import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import OrderLogoActive from '../atoms/orderActive';

export default function ActiveMake() {
  return (
      <Wrapper>
         <Link href="/order/step1" as="/order">
           <a>
          <OrderLogoActive/>
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