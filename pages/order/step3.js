import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {  Modal, Input, Button} from 'antd';
import DaumPostcode from "react-daum-postcode";

import ReceiverText from '../../src/components/atoms/receiverText';
import PhoneNumText from '../../src/components/atoms/phoneNumText';
import AddressText from '../../src/components/atoms/addressText';
import ShipInfoText from '../../src/components/atoms/shipInfoText';
import OrderInfoText from '../../src/components/atoms/orderInfoText';
import OrderText from '../../src/components/atoms/orderText';
import EmailText from '../../src/components/atoms/emailText';

export default function Info() {
  
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
        <ShipInfoText/>
        <Row>
        <ReceiverText/>
        <Input name="receiver" textholder="이름" value={form.receiver} placeholder="이름" onChange={handleFormChange}/>
        </Row>
        <Row>
        <PhoneNumText/>
        <Input name="rPhoneNum" value={form.rPhoneNum} onChange={handleFormChange}/>
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
        <Input placeholder="기본주소" value={baseAddress}/>
        <Input placeholder="상세주소" value={detailAddress} onChange={handleFormChange}/>
        </Row>
       
        <OrderInfoText/><Button onClick={handleFillContent}>위와 동일하게 채우기</Button>
        <Row>
        <OrderText/>
        <Input name="order" placeholder="이름" value={form.order} onChange={handleFormChange}/>
        </Row>
        <Row>
        <PhoneNumText/>
        <Input name="oPhoneNum" value={form.oPhoneNum} onChange={handleFormChange}/>
        </Row>
        <Row>
        <EmailText/>
        <Input placeholder="이메일" name="email" value={form.email} onChange={handleFormChange}/>
        </Row>

      </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Row = styled.div`
  flex-direction: column;
  width:100%;
`