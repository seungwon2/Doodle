import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import Header from '../../src/components/organisms/header';
import StepIcon1 from '../../src/components/atoms/stepIcon1';
import NextButton from '../../src/components/molecules/nextButton';

export default function Step4({cost}) {
  return (
      <Wrapper>
        <Header title="제작하기"/>
        <StepIcon1/>
        <Title>
           Step4<br/>
           결제하기
          </Title>
          <Contents>
           입금 완료시, 카톡으로 확인 메시지가<br/>
           발송되고 제작이 시작됩니다!
          </Contents>
        <Card style={{ width: 300}}>
            <Text>
                <p>신한 110-468-600859 (두들)</p>
                <p>{cost}원</p>
            </Text>
        </Card>
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
`;
const Title = styled.label`
  color: rgb(69,69,69);
  font-size: 1.563rem;
  padding-left: 2vw;
  width: 100%;
`;
const Contents = styled.label`
  color: rgb(69,69,69);
  font-size: 1.188rem;
  padding-top: 9vh;
  padding-left: 2vw;
  width: 100%;
`;