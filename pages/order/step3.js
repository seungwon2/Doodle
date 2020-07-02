import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {  Modal, Input, Button} from 'antd';
import DaumPostcode from "react-daum-postcode";
import Link from 'next/link';

import ReceiverText from '../../src/components/atoms/receiverText';
import PhoneNumText from '../../src/components/atoms/phoneNumText';
import AddressText from '../../src/components/atoms/addressText';
import ShipInfoText from '../../src/components/atoms/shipInfoText';
import OrderInfoText from '../../src/components/atoms/orderInfoText';
import OrderText from '../../src/components/atoms/orderText';
import EmailText from '../../src/components/atoms/emailText';
import Header from '../../src/components/organisms/header';
import NextButton from "../../src/components/molecules/nextButton";
import StepIcon1 from "../../src/components/atoms/stepIcon1";


export default function Step3() {
  
const [isVisible, setIsVisible] = useState(false);
const [form, setForm] = useState({ receiver: "", rPhoneNum: "", order: "", oPhoneNum:"", email: "" });
const [postCode, setPostCode] = useState();
const [baseAddress, setBaseAddress] = useState();
const [detailAddress, setDetailAddress] = useState();

const showModal = () => {
    setIsVisible(true);
  };

const handleOk = (e) => {
    console.log(e);
    setIsVisible(false);
  };

const handleCancel = (e) => {
    console.log(e);
    setIsVisible(false);
  };
const handleData = data => {
    setPostCode(data.zonecode);
    setBaseAddress(data.address);
    console.log("저장된 데이터");
    console.log(postCode);
    console.log(baseAddress);
  };
const handleFormChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
  console.log(form);
};
const handleFillContent = (e) => {
    setForm({ ...form,
      order : form.receiver, 
      oPhoneNum : form.rPhoneNum,  
    })
    console.log(form);
};
  return (
      <Wrapper>
        <Header title="제작하기"/>
        <StepIcon1/>
        <Title>
           Step3<br/>
           배송지와 고객 정보
          </Title>
        <ShipInfoText/>
        <Row>
        <ReceiverText/>
        <Input name="receiver" textholder="이름" value={form.receiver} placeholder="이름" onChange={handleFormChange}/>
        </Row>
        <Row>
        <PhoneNumText/>
        <Input name="rPhoneNum" value={form.rPhoneNum} onChange={handleFormChange} placeholder="'-' 없이 번호만 입력"/>
        </Row>
        <Row>
        <AddressText/>
        <Input placeholder="우편번호" value={postCode}/> <Button onClick={showModal}>찾기</Button>
        <Modal
          title="우편번호 찾기"
          visible={isVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
        <DaumPostcode onComplete={handleData} />
        </Modal>
        </Row>
        <Row>
        <Input placeholder="기본주소" value={baseAddress}/>
        </Row>
        <Row>
        <Input placeholder="상세주소" value={detailAddress} onChange={handleFormChange}/>
        </Row>
        <Row>
        <OrderInfoText/><Button onClick={handleFillContent}>위와 동일하게 채우기</Button>
        </Row>
        <Row>
        <OrderText/>
        <Input name="order" placeholder="이름" value={form.order} onChange={handleFormChange} placeholder="'-' 없이 번호만 입력"/>
        </Row>
        <Row>
        <PhoneNumText/>
        <Input name="oPhoneNum" value={form.oPhoneNum} onChange={handleFormChange}/>
        </Row>
        <Row>
        <EmailText/>
        <Input placeholder="이메일" name="email" value={form.email} onChange={handleFormChange}/>
        </Row>
        <NextButton link='/order/step4' buttonName="결제하기"/>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;

`
const Row = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.label`
color: rgb(69,69,69);
font-size: 1.563rem;
padding-left: 2vw;
width: 100%;
`;
const BuyButton = styled.button`
    display: flex;
    justify-content: center;
    color: rgb(255, 255, 255);
    width: 60%;
    height: 8vh;
    margin: auto;
    font-size: 1.25rem;
    line-height: normal;
    background-color: rgb(255, 144, 69);
    border: 0px;
    box-shadow: 4pt 4pt 6pt 0pt rgba (0, 0, 0, 0.25);
    border-radius: 0.375rem;
    transition: background-color 0.2s;
    align-items: center;
`;