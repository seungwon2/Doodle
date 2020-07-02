import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Input, Button, PageHeader } from 'antd';
import axios from 'axios';

import OrderText from '../src/components/atoms/orderText';
import PhoneNumText from '../src/components/atoms/phoneNumText';
import FAQ from '../src/components/organisms/FAQ';
import Logo from '../src/components/atoms/logo';

export default function Mypage() {
    const [form, setForm] = useState({ name:"", phoneNum:"" });
    const handleOnClick = (e) => {
        axios.post('http://ec2-15-164-172-128.ap-northeast-2.compute.amazonaws.com/api/user/', form)
        .then(function (response) {
          console.log(response);
          console.log("전송 성공");
        })
        .catch(function (error) {
          console.log(error.response);
          console.log("전송 실패");
        })
    };
  return (
      <Wrapper>
          <Logo/>
          <PageHeader className="site-page-header"
            onBack={() => null}
            title="마이페이지"
            subTitle="홈"/>
          <Row>
          <OrderText/>
          <Input placeholder="이름" value={form.name} name="name"/>
          </Row>
          <Row>
          <PhoneNumText value={form.phoneNum} name="phoneNum"/>
          <Input/>
          </Row>
          <Button onClick={handleOnClick}>조회하기</Button>
          <FAQ/>
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
const Row = styled.div``;