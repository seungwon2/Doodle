import React from 'react';
import styled from 'styled-components';

export default function Mypage() {
  return (
      <Wrapper>
          {/* 이미지 */}
          <Label>마이페이지</Label>
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
`;