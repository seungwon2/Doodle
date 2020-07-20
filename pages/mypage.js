/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Input, message, Result } from "antd";
import axios from "axios";
import Link from "next/link";

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
	const [userData, setUserData] = useState(null);
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
				} else return res.data[0];
			})
			.catch((err) => {
				console.log("catch걸림");
				error();
				if (!res.data[0].order) {
					<Result title='Your operation has been executed' />;
				}
			});
		setUserData(data);
		setSearch(true);
		console.log("유저데이터:");
		console.log(userData);
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
					<Grey />
					<FAQ />
				</>
			)}
			{search && (
				<>
					<Row>
						<Text>{userData.order}님의 주문정보</Text>
					</Row>
					<OrderInfoCard>
						<InfoColumn>
							<img src={userData.doodle} width='100%' height='100%' />
						</InfoColumn>
						<InfoArea>
							<TextColumn>
								<NormalText text='제품명' />
								<UserInfoText>
									<br />
									리디자인
								</UserInfoText>
								<NormalText text='수량' />
							</TextColumn>
							<TextColumn>
								<UserInfoText>
									우리아이 <br />
									낙서머그
								</UserInfoText>
								<UserInfoText>{userData.redesign}단계</UserInfoText>
								<UserInfoText>{userData.amount}개</UserInfoText>
							</TextColumn>
						</InfoArea>
					</OrderInfoCard>
					<Grey />
					<Row>
						<Text>배송지 정보</Text>
					</Row>
					<InfoArea>
						<InfoRow>
							<NormalText text='수령인' />
							<NormalText text='연락처' />
							<NormalText text='배송지' />
						</InfoRow>
						<InfoRow>
							<UserInfoText>{userData.receiver}</UserInfoText>
							<UserInfoText>{userData.r_phone_num}</UserInfoText>
							<UserInfoText>
								({userData.post_code}) {userData.base_address}
							</UserInfoText>
							<UserInfoText> {userData.detail_address}</UserInfoText>
						</InfoRow>
					</InfoArea>
				</>
			)}
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
	margin-right: 5vh;
	width: 100%;
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
	width: 35%;
	height: 100%;
	align-items: flex-start;
`;
