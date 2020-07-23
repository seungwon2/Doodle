/** @format */

import React from "react";
import styled from "styled-components";

import BoldText from "../atoms/boldText";

export default function FinalPayCheck({ amount }) {
	return (
		<Wrapper>
			<BoldText text='최종 결제 금액' />
			<Box>
				<Row>
					<Text>우리아이 낙서 머그</Text>
					<CostLabel>{amount * 20},000원</CostLabel>
				</Row>
				<Row>
					<Text>할인 이벤트</Text>
					<CostLabel>{amount * -6},000원</CostLabel>
				</Row>
				<Row>
					<Text>배송비 무료 이벤트</Text>
					<CostLabel>무료</CostLabel>
				</Row>
				<Grey />
				<Row>
					<CostText>최종 결제 금액</CostText>
					<Cost>{amount * 14000}원</Cost>
				</Row>
			</Box>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 83%;
`;
const Text = styled.label`
	font-size: 1.5rem;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: right;
`;
const CostLabel = styled.label`
	font-size: 1.3rem;
	width: 100%;
	text-align: right;
`;
const Cost = styled.label`
	font-size: 1.3rem;
	font-weight: bold;
	width: 100%;
	text-align: right;
	color: rgb(255, 144, 69);
`;
const Box = styled.div`
	margin-top: 1.5vh;
	border: solid 2px rgb(229, 229, 229);
	border-radius: 2px;
	padding: 2.2rem 1rem 2.2rem 1rem;
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const CostText = styled.div`
	font-size: 1.5rem;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: right;
	font-weight: bold;
`;
const Grey = styled.div`
	background-color: rgb(229, 229, 229);
	height: 0.1rem;
	margin-top: 1.5rem;
	margin-bottom: 2rem;
`;
