/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "antd";
import axios from "axios";

import FAQ from "../src/components/organisms/FAQ";
import NormalText from "../src/components/atoms/normalText";
import Header from "../src/components/organisms/header";
import BoldText from "../src/components/atoms/boldText";
import Grey from "../src/components/atoms/grey";
import BottomBar from "../src/components/organisms/bottomBar";
import Phantom from "../src/components/organisms/phantom";

export default function Mypage() {
	const [form, setForm] = useState({ order: "", o_phone_num: "" });
	const [search, setSearch] = useState(false);
	const [userData, setUserData] = useState({
		redesign: "",
		amount: "",
		receiver: "",
		phoneNum: "",
		postCode: "",
		baseAddress: "",
		detailAddress: "",
		doodle: "",
	});
	const [data, setData] = useState();
	const handleOnClick = (e) => {
		axios
			.get(
				"http://ec2-15-164-172-128.ap-northeast-2.compute.amazonaws.com/api/produce/" +
					`?order=${form.order}&o_phone_num=${form.o_phone_num}`,
				form
			)
			.then(function (response) {
				console.log(response);
				setSearch(true);
				console.log("전송 성공");
				console.log(response.data[1].id);
				console.log(response.data[0].redesign);
				setData(response.data[0].redesign);
				console.log(data);
				setUserData({
					...userData,
					redesign: response.data[0].redesign,
					amount: response.data[0].amount,
					receiver: response.data[0].receiver,
					phoneNum: response.data[0].r_phone_num,
					postCode: response.data[0].post_code,
					baseAddress: response.data[0].base_address,
					detailAddress: response.data[0].detail_address,
					doodle: response.data[0].doodle,
				});
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
			<Header title='마이페이지' link='/' />
			<Grey />
			{!search && (
				<>
					<Row>
						<BoldText text='주문 조회하기' />
					</Row>
					<Row>
						<NormalText text='주문자 명' />
						<Input
							placeholder='이름'
							name='order'
							value={form.order}
							onChange={handleFormChange}
						/>
					</Row>
					<Row>
						<NormalText text='연락처' />
						<Input
							placeholder="'-' 빼고 입력"
							name='o_phone_num'
							value={form.o_phone_num}
							onChange={handleFormChange}
						/>
					</Row>
					<ButtonRow>
						<Button onClick={handleOnClick}>조회하기</Button>
					</ButtonRow>
				</>
			)}
			{search && <>으악</>}
			<Grey />
			<FAQ />
			<Phantom />
			<BottomBar active='mypage' />
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
