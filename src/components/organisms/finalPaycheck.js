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
				<Row>
					<Text>최종 결제 금액</Text>
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
`;
const Box = styled.div`
	margin-top: 1.5vh;
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
