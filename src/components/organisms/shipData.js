/** @format */

import React from "react";
import styled from "styled-components";

export default function ShipData({ userData }) {
	return (
		<Wrapper>
			<Row>
				<Text>주문 상품</Text>
			</Row>
			<OrderInfoCard>
				<InfoColumn>
					<img src={userData.doodle} width='100%' height='100%' />
				</InfoColumn>
				<InfoArea>
					<TextColumn>
						<UserInfoText>제품명</UserInfoText>
						<UserInfoText>리디자인</UserInfoText>
						<UserInfoText>수량</UserInfoText>
					</TextColumn>
					<ResultColumn>
						<UserInfoText>우리아이 낙서머그</UserInfoText>
						<UserInfoText>{userData.redesign}단계</UserInfoText>
						<UserInfoText>{userData.amount}개</UserInfoText>
					</ResultColumn>
				</InfoArea>
			</OrderInfoCard>
			<Grey />
			<Row>
				<Text>배송지 정보</Text>
			</Row>
			<InfoArea>
				<InfoRow>
					<UserInfoText>수령인</UserInfoText>
					<UserInfoText>연락처</UserInfoText>
					<UserInfoText>배송지</UserInfoText>
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
