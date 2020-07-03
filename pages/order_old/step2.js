import React from 'react';
import styled from 'styled-components';

import Header from '../../src/components/organisms/header';
import StepIcon1 from "../../src/components/atoms/stepIcon1";
import NextButton from '../../src/components/molecules/nextButton';
import OrderTitle from "../../src/components/atoms/orderTitle";
import OrderExp from "../../src/components/atoms/orderExp";


export default function Step2({ImgURL}) {
  let profile_preview = <img className='profile_preview' src={ImgURL} height="130%"></img>

  return (
      <Wrapper>
          <Header title="제작하기"/>
          <StepIcon1/>
          <OrderTitle step="2"
                  text="리디자인 단계 설문"
           />
          <OrderExp text="작업에 들어가기 전, 예시를 참고하여 선호하는"/>
          <OrderExp text=" 낙서의 리디자인 정도를 선택해주세요."/>
    
          <Thumbnail>{profile_preview}</Thumbnail>

          <NextButton link="/order/step3" buttonName="다음으로"/>
      </Wrapper>
  );
}
const Wrapper = styled.div`

`;

const Thumbnail = styled.div`
 backgroundColor: #efefef;
 height: 30vh;
 padding-top: 8vh;
 padding-bottom: 8vh;
`;