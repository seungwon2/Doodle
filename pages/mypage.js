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
	const [userData, setUserData] = useState(null);

	const handleOnClick = async () => {
		const data = await axios
			.get(
				"http://ec2-15-164-172-128.ap-northeast-2.compute.amazonaws.com/api/produce/" +
					`?order=${form.order}&o_phone_num=${form.o_phone_num}`,
				form
			)
			.then((res) => {
				console.log(res);
				return res.data[0];
			})
			.catch((err) => console.log(err));
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
					<Grey />
					<FAQ />
				</>
			)}
			{search && (
				<>
					<Row>
						<Text>{userData.order}님의 주문정보</Text>
					</Row>
					<OrderInfoArea>
						<img src={userData.doodle} />
						<InfoArea>
							<InfoRow>
								<NormalText text='제품명' />
								<UserInfoText>우리아이 낙서 머그</UserInfoText>
							</InfoRow>
							<InfoRow>
								<NormalText text='리디자인 단계' />
								<UserInfoText>{userData.redesign}단계</UserInfoText>
							</InfoRow>
							<InfoRow>
								<NormalText text='수량' />
								<UserInfoText>{userData.amount}개</UserInfoText>
							</InfoRow>
						</InfoArea>
					</OrderInfoArea>
					{userData.receiver}
					<Grey />
					<Row>
						<Text>배송지 정보</Text>
					</Row>
					<InfoArea>
						<InfoRow>
							<NormalText text='수령인' />
							<UserInfoText>{userData.receiver}</UserInfoText>
						</InfoRow>
						<InfoRow>
							<NormalText text='연락처' />
							<UserInfoText>{userData.r_phone_num}</UserInfoText>
						</InfoRow>
						<InfoRow>
							<NormalText text='배송지' />
							<UserInfoText>
								({userData.post_code}) {userData.base_address}{" "}
								{userData.detail_address}
							</UserInfoText>
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
	font-weight: bold;
	color: rgb(69, 69, 69);
`;
const InfoArea = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
const UserInfoText = styled.label`
	font-size: 1.3rem;
`;
const OrderInfoArea = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const InfoRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
