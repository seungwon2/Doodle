/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { message, Result } from "antd";
import axios from "axios";

import FAQ from "../src/components/organisms/FAQ";
import NormalText from "../src/components/atoms/normalText";
import Header from "../src/components/organisms/header";
import BoldText from "../src/components/atoms/boldText";
import BottomBar from "../src/components/organisms/bottomBar";
import Phantom from "../src/components/organisms/phantom";
import ShipData from "../src/components/organisms/shipData";

export default function Mypage() {
	const [form, setForm] = useState({ order: "", o_phone_num: "" });
	const [search, setSearch] = useState(false);
	const [userData, setUserData] = useState(null);
	const [response, setResponse] = useState();
	const error = () => {
		message.error("올바른 정보를 입력해주세요!");
	};
	const handleOnClick = async () => {
		const data = await axios
			.get(
				"https://www.doodlehj.com/api/produce/" +
					`?order=${form.order}&o_phone_num=${form.o_phone_num}`,
				form
			)
			.then((res) => {
				console.log(res);
				if (!res.data[0].order) {
					<Result title='Your operation has been executed' />;
				} else {
					console.log(res.data);
					return res.data;
				}
			})
			.catch((err) => console.log(err));

		setUserData(data);
		setSearch(true);
		console.log("response", userData);
	};

	const handleFormChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
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
						<NormalText text='주문자명' />
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
					<FAQ />
				</>
			)}
			{search && (
				<>
					<Row>
						<Title>{userData.order}님의 주문정보</Title>
					</Row>
					{/* {userData&&userData.map((singleuserData) => (
						<ShipData key={singleuserData.id} userData={singleuserData} />
					))} */}
					<ShipData userData={userData} />
				</>
			)}
			<Phantom />
			<BottomBar active='mypage' />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	min-width: 100%;
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
	border: 0px;
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	touch-action: manipulation;
	height: fit-content;
	padding: 8px 8px;
	font-size: 1.3rem;
	border-radius: 2px;
	color: rgb(255, 255, 255);
	background-color: rgb(255, 144, 69);
	width: 21%;
`;
const Text = styled.label`
	font-size: 1.7rem;
	font-weight: 500;
	color: rgb(69, 69, 69);
`;
const InfoArea = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;
	width: 100%;
`;
const UserInfoText = styled.label`
	font-size: 1.3rem;
`;
const OrderInfoCard = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 5vh;
	width: 91%;
`;
const InfoRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;
const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 35%;
	height: 100%;
	align-items: flex-start;
`;
const TextColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 22%;
	height: 100%;
	align-items: flex-start;
`;
const Title = styled.label`
	font-size: 1.8rem;
	font-weight: 600;
	margin-bottom: 3vh;
`;
const ResultColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 50%;
	height: 100%;
	align-items: flex-start;
`;
const Grey = styled.div`
	background-color: rgb(239, 239, 239);
	width: 100%;
	margin-top: 3vh;
	margin-bottom: 3vh;
	height: 1px;
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
