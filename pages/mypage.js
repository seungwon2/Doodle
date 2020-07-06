/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "antd";
import axios from "axios";

import FAQ from "../src/components/organisms/FAQ";
import NormalText from "../src/components/atoms/normalText";
import Header from "../src/components/organisms/header";
import BoldText from "../src/components/atoms/boldText";
import Grey from "../src/components/atoms/grey";

export default function Mypage() {
	const [form, setForm] = useState({ name: "", phoneNum: "" });
	const handleOnClick = (e) => {
		axios
			.post(
				"http://ec2-15-164-172-128.ap-northeast-2.compute.amazonaws.com/api/user/",
				form
			)
			.then(function (response) {
				console.log(response);
				console.log("전송 성공");
			})
			.catch(function (error) {
				console.log(error.response);
				console.log("전송 실패");
			});
	};
	const handleFormChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
		console.log(form);
	};
	return (
		<Wrapper>
			<Header title='마이페이지' />
			<Grey />
			<Row>
				<BoldText text='주문 조회하기' />
			</Row>
			<Row>
				<NormalText text='주문자 명' />
				<Input
					placeholder='이름'
					name='name'
					value={form.name}
					name='name'
					onChange={handleFormChange}
				/>
			</Row>
			<Row>
				<NormalText text='연락처' />
				<Input
					placeholder="'-' 빼고 입력"
					name='phoneNum'
					value={form.phoneNum}
					name='phoneNum'
					onChange={handleFormChange}
				/>
			</Row>
			<ButtonRow>
				<Button onClick={handleOnClick}>조회하기</Button>
			</ButtonRow>
			<Grey />
			<FAQ />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 8%;
	margin-right: 8%;
	align-items: center;
	margin-bottom: 1.6%;
`;
const ButtonRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-right: 8%;
	margin-bottom: 1.6%;
`;
const Button = styled.button`
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
