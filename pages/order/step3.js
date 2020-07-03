import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {  Modal, Button} from 'antd';
import DaumPostcode from "react-daum-postcode";
import Link from 'next/link';

import Header from '../../src/components/organisms/header';
import NextButton from "../../src/components/molecules/nextButton";
import StepIcon1 from "../../src/components/atoms/stepIcon1";
import BoldText from "../../src/components/atoms/boldText";
import NormalText from "../../src/components/atoms/normalText";


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
        <Row>
        <BoldText text="배송지 정보"/>
        </Row>
        <Row>
        <NormalText text="받으시는 분"/>
        <Input name="receiver" textholder="이름" value={form.receiver} placeholder="이름" onChange={handleFormChange} width="50vh"/>
        </Row>
        <Row>
        <NormalText text="연락처"/>
        <Input name="rPhoneNum" value={form.rPhoneNum} onChange={handleFormChange} placeholder="'-' 없이 번호만 입력"/>
        </Row>
        <Row>
        <NormalText text="주소"/>
        <PostCodeInput placeholder="우편번호" value={postCode}/> <FindButton onClick={showModal}>찾기</FindButton>
        <Modal
          title="우편번호 찾기"
          visible={isVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
        <DaumPostcode onComplete={handleData} />
        </Modal>
        </Row>
        <AddressRow>
        <AddressInput placeholder="기본주소" value={baseAddress}/>
        </AddressRow>
        <AddressRow>
        <AddressInput placeholder="상세주소" value={detailAddress} onChange={handleFormChange}/>
        </AddressRow>
        <Row>
        <BoldText text="주문자 정보"/><AutoButton onClick={handleFillContent}>위와 동일하게 채우기</AutoButton>
        </Row>
        <Row>
        <NormalText text="주문자"/>
        <Input name="order" placeholder="이름" value={form.order} onChange={handleFormChange} placeholder="'-' 없이 번호만 입력"/>
        </Row>
        <Row>
        <NormalText text="연락처"/>
        <Input name="oPhoneNum" value={form.oPhoneNum} onChange={handleFormChange}/>
        </Row>
        <Row>
        <NormalText text="이메일"/>
        <Input placeholder="이메일" name="email" value={form.email} onChange={handleFormChange}/>
        </Row>
        <NextButton link='/order/step4' buttonName="결제하기"/>
      </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Row = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;
const AddressRow = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1vh;
  margin-bottom: 1vh;
  justify-content: flex-end;
`;
const Title = styled.label`
  color: rgb(69,69,69);
  font-size: 1.563rem;
  padding-left: 2vw;
  width: 100%;
`;
const Input = styled.input`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    width: 114%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
`;

const AddressInput = styled.input`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    width: 55%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
`;

const AutoButton = styled.button`
 line-height: 1.5715;
 position: relative;
 display: inline-block;
 font-weight: 400;
 white-space: nowrap;
 text-align: center;
 background-image: none;
 border: 0px;
 cursor: pointer;
 transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
 touch-action: manipulation;
 height: 32px;
 padding: 4px 15px;
 font-size: 0.75rem;
 border-radius: 2px;
 color: rgba(0, 0, 0, 0.65);
 background-color: #fff;
 border-color: #d9d9d9;
`;

const PostCodeInput = styled.input`
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 font-variant: tabular-nums;
 list-style: none;
 font-feature-settings: 'tnum', "tnum";
 width: 80%;
 margin-right: 2%;
 min-width: 0;
 padding: 4px 11px;
 color: rgba(0, 0, 0, 0.65);
 font-size: 14px;
 line-height: 1.5715;
 background-color: #fff;
 background-image: none;
 border: 1px solid #d9d9d9;
 border-radius: 2px;
 transition: all 0.3s;
`;
const FindButton = styled.button`
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 0.9rem;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.65);
    background: #fff;
    border-color: #d9d9d9;
    width: 20%;
`;