/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Card, message } from "antd";
import DaumPostcode from "react-daum-postcode";
import axios from "axios";

import BottomBar from "../src/components/organisms/bottomBar.js";
import Logo from "../src/components/atoms/logo.js";
import NextButton from "../src/components/molecules/nextButton.js";
import ProductSlide from "../src/components/organisms/productSlide";
import ProductInfo from "../src/components/organisms/productInfo";
import ProductInfoPic from "../src/components/organisms/productInfoPic";
import Review from "../src/components/organisms/review";
import StepIcon from "../src/components/atoms/stepIcon";
import OrderTitle from "../src/components/atoms/orderTitle";
import OrderExp from "../src/components/atoms/orderExp";
import BoldText from "../src/components/atoms/boldText";
import NormalText from "../src/components/atoms/normalText";
import GreyButton from "../src/components/molecules/greyButton";
import OrangeButton from "../src/components/molecules/orangeButton.js";
import Phantom from "../src/components/organisms/phantom.js";
import OrderHeader from "../src/components/organisms/orderHeader.js";
import Grey from "../src/components/atoms/grey.js";
import PayInfo from "../src/components/organisms/payInfo.js";
import OrderAmountCheck from "../src/components/organisms/orderAmountCheck.js";
import FinalPayCheck from "../src/components/organisms/finalPaycheck.js";
import MakeButton from "../src/components/molecules/makeButton.js";
import Step from "../src/components/molecules/step.js";
import Notice from "../src/components/organisms/notice.js";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Order() {
	const [ImgURL, setImgURL] = useState(null);
	const [Doodle, setDoodle] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [form, setForm] = useState({
		receiver: "",
		rPhoneNum: "",
		order: "",
		oPhoneNum: "",
		email: "",
		detailAddress: "",
	});
	const [postCode, setPostCode] = useState();
	const [baseAddress, setBaseAddress] = useState();
	const [step, setStep] = useState(0);
	const [redesign, setRedesign] = useState(1);
	const [amount, setAmount] = useState(1);
	const [redesignExample, setRedesignExample] = useState(
		"/redesign/redesign1.png"
	);
	const [copy, setCopy] = useState(false);
	const [current, setCurrent] = useState(0);

	const success = () => {
		message.success("계좌번호가 클립보드에 복사되었습니다!");
	};
	const warning = () => {
		message.warning("모든 정보를 입력해주세요!");
	};
	const handleNext = () => {
		setStep(step + 1);
	};

	const handleSubmit = () => {
		const FormData = require("form-data");
		const form_data = new FormData();
		form_data.append("r_phone_num", form.rPhoneNum);
		form_data.append("doodle", Doodle);
		form_data.append("post_code", postCode);
		form_data.append("base_address", baseAddress);
		form_data.append("redesign", redesign);
		form_data.append("amount", amount);
		form_data.append("receiver", form.receiver);
		form_data.append("o_phone_num", form.oPhoneNum);
		form_data.append("order", form.order);
		form_data.append("email", form.email);
		form_data.append("detail_address", form.detailAddress);

		axios
			.post("https://www.doodlehj.com/api/produce/", form_data)
			.then(function (response) {
				setStep(step + 1);
			})
			.catch(function (error) {
				warning();
			});
	};

	const onChangeDoodle = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			setDoodle(file);
			setImgURL(reader.result);
		};
		reader.readAsDataURL(file);
	};

	const showModal = () => {
		setIsVisible(true);
	};

	const handleOk = (e) => {
		setIsVisible(false);
	};

	const handleCancel = () => {
		setIsVisible(false);
	};
	const handleData = (data) => {
		setPostCode(data.zonecode);
		setBaseAddress(data.address);
	};
	const handleFormChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	const handleFillContent = () => {
		setForm({ ...form, order: form.receiver, oPhoneNum: form.rPhoneNum });
	};
	const onClickCopyButton = () => {
		success();
	};
	return (
		<div>
			{step === 0 && (
				<Wrapper>
					<Logo />
					<ProductSlide />
					<ProductInfo />
					<Grey />
					<ProductInfoPic />
					<MakeButton buttonName='낙서머그 제작하기' handleNext={handleNext} />
					<Phantom />
					<BottomBar active='make' />
				</Wrapper>
			)}
			{step === 1 && (
				<Wrapper>
					{ImgURL && (
						<>
							<OrderHeader title='제작하기' step={step} setStep={setStep} />
							<StepIcon imgPath='/step/step1.png' />
							<OrderTitle step='1' text='우리아이 낙서 사진 업로드' />
							<OrderExp text=' 아래의 낙서로 리디자인이 진행됩니다.' />
							<OrderPhantom />
							<img className='preview' src={ImgURL} width='80%'></img>
							<FileBox>
								<ButtonChoose for='doodle'>다시 선택하기</ButtonChoose>
								<InputFile
									type='file'
									name='doodle'
									onChange={onChangeDoodle}
									id='doodle'
								/>
							</FileBox>
							<NextButton buttonName='다음으로' handleNext={handleNext} />
						</>
					)}
					{ImgURL === null && (
						<>
							<OrderHeader title='제작하기' step={step} setStep={setStep} />

							<StepIcon imgPath='/step/step1.png' />
							<OrderTitle step='1' text='우리아이 낙서 사진 업로드' />
							<OrderExp text='머그컵에 리디자인 되어 그려질' />
							<OrderExp text='아이의 소중한 낙서를 업로드 해주세요.' />
							<Notice />
							<FileBox>
								<ButtonName for='doodle'>사진 업로드</ButtonName>
								<InputFile
									type='file'
									name='doodle'
									onChange={onChangeDoodle}
									id='doodle'
								/>
							</FileBox>
							<Phantom />
							<BottomBar active='make' />
						</>
					)}
				</Wrapper>
			)}
			{step === 2 && (
				<Wrapper>
					<OrderHeader title='제작하기' step={step} setStep={setStep} />
					<StepIcon imgPath='/step/step2.png' />
					<OrderTitle step='2' text='리디자인 단계 설문' />
					<OrderExp text='작업에 들어가기 전, 예시를 참고하여 선호하는' />
					<OrderExp text=' 낙서의 리디자인 정도를 선택해주세요.' />
					<OrderPhantom />
					<img className='preview' src={redesignExample} width='80%' />
					<OrderPhantom />
					<Step
						redesign={redesign}
						setRedesign={setRedesign}
						setRedesignExample={setRedesignExample}
						ImgURL={ImgURL}
					/>
					<NextButton buttonName='다음으로' handleNext={handleNext} />
				</Wrapper>
			)}
			{step === 3 && (
				<Wrapper>
					<OrderHeader title='제작하기' step={step} setStep={setStep} />
					<StepIcon imgPath='/step/step3.png' />
					<OrderTitle step='3' text='배송지와 고객 정보' />
					<OrderAmountCheck
						redesign={redesign}
						amount={amount}
						setAmount={setAmount}
						ImgURL={ImgURL}
					/>
					<Grey />
					<Row>
						<BoldText text='배송지 정보' />
					</Row>
					<Row>
						<UserText>받으시는 분</UserText>
						<Input
							name='receiver'
							textholder='이름'
							value={form.receiver}
							placeholder='이름'
							onChange={handleFormChange}
							width='50vh'
						/>
					</Row>
					<Row>
						<UserText>연락처</UserText>
						<Input
							name='rPhoneNum'
							value={form.rPhoneNum}
							onChange={handleFormChange}
							placeholder="'-' 없이 번호만 입력"
						/>
					</Row>
					<PostCodeRow>
						<PostCodeText>주소</PostCodeText>
						<PostCodeSection>
							<PostCodeInput placeholder='우편번호' value={postCode} />
							<FindButton onClick={showModal}>찾기</FindButton>
							<Modal
								title='우편번호 찾기'
								visible={isVisible}
								onOk={handleOk}
								onCancel={handleCancel}>
								<DaumPostcode onComplete={handleData} />
							</Modal>
						</PostCodeSection>
					</PostCodeRow>
					<AddressRow>
						<AddressInput placeholder='기본주소' value={baseAddress} />
					</AddressRow>
					<AddressRow>
						<AddressInput
							placeholder='상세주소'
							name='detailAddress'
							value={form.detailAddress}
							onChange={handleFormChange}
						/>
					</AddressRow>
					<Grey />
					<Row>
						<BoldText text='주문자 정보' />
						<AutoButton onClick={handleFillContent}>
							위와 동일하게 채우기
						</AutoButton>
					</Row>
					<Row>
						<UserText>주문자</UserText>

						<Input
							name='order'
							placeholder='이름'
							value={form.order}
							onChange={handleFormChange}
							placeholder='이름'
						/>
					</Row>
					<Row>
						<UserText>연락처</UserText>

						<Input
							name='oPhoneNum'
							value={form.oPhoneNum}
							onChange={handleFormChange}
							placeholder="'-' 없이 번호만 입력"
						/>
					</Row>
					<Row>
						<UserText>이메일</UserText>

						<Input
							placeholder='이메일'
							name='email'
							value={form.email}
							onChange={handleFormChange}
						/>
					</Row>
					<Grey />
					<FinalPayCheck amount={amount} />
					<Grey />
					<PayInfo />
					<CopyToClipboard
						text='신한 110468600859'
						onCopy={() => setCopy(true)}>
						<NextButton buttonName='결제하기' handleNext={handleSubmit} />
					</CopyToClipboard>
				</Wrapper>
			)}
			{step === 4 && (
				<Wrapper>
					<OrderHeader title='제작하기' step={step} setStep={setStep} />
					<StepIcon imgPath='/step/step4.png' />
					<OrderTitle step='4' text='결제하기' />
					<OrderExp text='입금 완료시, 카톡으로 확인 메시지가' />
					<OrderExp text='발송되고 제작이 시작됩니다!' />
					<CardArea>
						<Card>
							<Text>
								<p>카카오뱅크 7979-22-38271</p>
								<p>(이호정)</p>
								<p>{amount * 14},000원</p>
							</Text>
						</Card>
					</CardArea>
					<CopyButtonWrapper>
						<CopyToClipboard
							text='카카오뱅크 79792238271'
							onCopy={() => setCopy(true)}>
							<Copybutton onClick={onClickCopyButton}>
								계좌번호 복사하기
							</Copybutton>
						</CopyToClipboard>
					</CopyButtonWrapper>
					<GreyButton link='/mypage' buttonName='주문 내역 확인' />
					<OrangeButton link='/' buttonName='홈으로' />
				</Wrapper>
			)}
		</div>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const InputFile = styled.input`
	height: 3.75rem;
	position: absolute;
	width: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
`;

const FileBox = styled.div`
	width: 100%;
	margin: auto;
	align-item: center;
	justify-content: center;
	display: flex;
`;

const ButtonName = styled.label`
	display: flex;
	justify-content: center;
	color: rgb(255, 255, 255);
	font-size: 1.9rem;
	font-weight: 500;
	width: 30rem;
	height: 10vh;
	margin: auto;
	font-size: 1.9rem;
	font-weight: 500;
	line-height: normal;
	background-color: rgb(255, 144, 69);
	cursor: pointer;
	border: 0px;
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);
	border-radius: 0.375rem;
	transition: background-color 0.2s;
	align-items: center;
`;

const ButtonChoose = styled.label`
	display: flex;
	justify-content: center;
	color: rgb(69, 69, 69);
	width: 30rem;
	height: 10vh;
	margin: auto;
	font-size: 1.9rem;
	font-weight: 500;
	line-height: normal;
	background-color: rgb(246, 247, 247);
	cursor: pointer;
	border: 0px;
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);
	border-radius: 0.375rem;
	transition: background-color 0.2s;
	align-items: center;
	margin-top: 15vh;
	margin-bottom: 2vh;
`;

const Row = styled.div`
	display: flex;
	margin-left: 5%;
	margin-right: 5%;
	margin-top: 1vh;
	margin-bottom: 1vh;
	width: 83%;
`;
const AddressRow = styled.div`
	display: flex;
	margin-left: 5%;
	margin-right: 22%;
	margin-top: 1vh;
	margin-bottom: 1vh;
	justify-content: flex-end;
	width: 100%;
`;
const Input = styled.input`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-variant: tabular-nums;
	list-style: none;
	font-feature-settings: "tnum", "tnum";
	width: 114%;
	min-width: 0;
	padding: 4px 11px;
	color: rgba(0, 0, 0, 0.65);
	font-size: 14px;
	line-height: 2.3;
	background-color: #fff;
	background-image: none;
	border: 1px solid #d9d9d9;
	border-radius: 2px;
	transition: all 0.3s;
`;

const AddressInput = styled.input`
	padding: 0;
	font-variant: tabular-nums;
	list-style: none;
	width: 46%;
	min-width: 0;
	padding: 4px 11px;
	color: rgba(0, 0, 0, 0.65);
	font-size: 14px;
	line-height: 2.3;
	background-color: #fff;
	background-image: none;
	border: 1px solid #d9d9d9;
	border-radius: 2px;
	transition: all 0.3s;
	marign-right: 22%;
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
	padding: 0;
	font-size: 1.2rem;
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
	font-feature-settings: "tnum", "tnum";
	width: 70%;
	margin-right: 2%;
	min-width: 0;
	padding: 4px 11px;
	color: rgba(0, 0, 0, 0.65);
	font-size: 14px;
	line-height: 2.3;
	background-color: #fff;
	background-image: none;
	border: 1px solid #d9d9d9;
	border-radius: 2px;
	transition: all 0.3s;
`;
const FindButton = styled.button`
	line-height: 2.3;
	position: relative;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	border: 1px solid transparent;
	box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
	padding: 4px 4px;
	font-size: 14px;
	border-radius: 2px;
	color: rgba(0, 0, 0, 0.65);
	background: #fff;
	border-color: #d9d9d9;
	width: 28%;
`;

const Text = styled.label`
	align-items: center;
	text-align: center;
	margin-top: 3vh;
	font-size: 1.5rem;
`;
const CardArea = styled.div`
	margin-top: 10vh;
	z-index: 5;
	border: 0;
	width: 40vh;
`;
const OrderPhantom = styled.div`
	margin-bottom: 10vh;
`;

const RedesignButtonArea = styled.div`
	display: flex;
	width: 83%;
	justify-content: space-around;
`;
const RedesignButton = styled.button`
	height: 3vh;
	color: rgb(255, 255, 255);
	width: 7rem;
	height: 6vh;
	margin: auto;
	font-size: 1rem;
	line-height: normal;
	background-color: rgb(255, 144, 69);
	border: 0px;
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);
	border-radius: 0.375rem;
	transition: background-color 0.2s;
	align-items: center;
	margin-bottom: 5vh;
`;

const ProductInfoArea = styled.div`
	display: flex;
	flex-direction: row;
`;
const UserText = styled.label`
	font-size: 1.5rem;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: right;
	margin-top: auto;
`;

const StepArea = styled.div`
	width: 83%;
	margin-bottom: 5vh;
`;

const Copybutton = styled.button`
	font-weight: 400;
	text-align: center;
	border: 0px;
	height: fit-content;
	padding: 10px;
	font-size: 1.2rem;
	border-radius: 7px;
	color: rgba(0, 0, 0, 0.65);
	background-color: #fff;
	border-color: rgba(0, 0, 0, 0.16);
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	margin-top: 2vh;
`;
const CopyButtonWrapper = styled.div`
	display: block;
	align-item: center;
	margin-top: 1vh;
	text-align: center;
	width: 40vh;
`;
const PostCodeText = styled.div`
	width: 45%;
	font-size: 1.5rem;
	height: fit-content;
	align-items: right;
	margin-top: auto;
	margin-bottom: auto;
`;
const PostCodeSection = styled.div`
	width: 55%;
`;
const PostCodeRow = styled.div`
	display: flex;
	margin-left: 5%;
	margin-right: 5%;
	margin-top: 1vh;
	margin-bottom: 1vh;
	width: 83%;
`;
