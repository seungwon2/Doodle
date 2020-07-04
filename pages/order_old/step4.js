import React from 'react';
import styled from 'styled-components';
import { Card, Row } from 'antd';
import Link from 'next/link';

import Header from '../../src/components/organisms/header';
import StepIcon1 from '../../src/components/atoms/stepIcon1';
import NextButton from '../../src/components/molecules/nextButton';
import OrderTitle from "../../src/components/atoms/orderTitle";
import OrderExp from "../../src/components/atoms/orderExp";
import ConfirmButton from '../../src/components/molecules/confirmButton';

export default function Step4({cost}) {
  return (
      <Wrapper>
        <Header title="제작하기"/>
        <StepIcon1/>
        <OrderTitle step="4"
                  text="결제하기"
           />
          <OrderExp text="입금 완료시, 카톡으로 확인 메시지가"/>
          <OrderExp text="발송되고 제작이 시작됩니다!"/>
        <CardArea>
        <Card style={{ width: 300}}>
            <Text>
                <p>신한 110-468-600859 (두들)</p>
                <p>{cost}원</p>
            </Text>
        </Card>
        </CardArea>
        <ConfirmButton link="/mypage" buttonName="주문 내역 확인"/>
        <NextButton link="/" buttonName="홈으로"/>
      </Wrapper>
  );
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`;
const Text = styled.label`
   align-items: center;
   text-align: center;
   margin-left: 6vh;
   margin-top: 3vh;
`;
const CardArea = styled.div`
   margin-top: 10vh;
`;