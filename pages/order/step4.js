import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import Header from '../../src/components/organisms/header';

export default function Step4({cost}) {
  return (
      <Wrapper>
        <Header title="제작하기"/>
        <Card style={{ width: 300}}>
            <Text>
                <p>신한 110-468-600859 (두들)</p>
                <p>{cost}원</p>
            </Text>
        </Card>
      </Wrapper>
  );
}
const Wrapper = styled.div`
    align-items: center;
    margin: auto;
`;
const Text = styled.label`
align-items: center;
`;