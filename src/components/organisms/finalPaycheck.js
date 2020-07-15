/** @format */

import React from "react";
import styled from "styled-components";

import BoldText from "../atoms/boldText";
import NormalText from "../atoms/normalText";

export default function FinalPayCheck({ amount }) {
	return (
		<Wrapper>
			<BoldText text='최종 결제 금액' />
			<Box>
				<Row>
					<NormalText text='우리아이 낙서 머그' />

					<CostLabel>{amount * 20},000원</CostLabel>
				</Row>
				<Row>
					<NormalText text='할인 이벤트' />
					<CostLabel>- {amount * 6},000원</CostLabel>
				</Row>
				<Row>
					<NormalText text='배송비' />
					<CostLabel>0원</CostLabel>
				</Row>
				<Row>
					<Text>최종 결제 금액</Text>
					<Cost>{amount * 14000}</Cost>
				</Row>
			</Box>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 83%;
`;
const Content = styled.div`
	text-align: center;
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
const Box = styled.div``;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
