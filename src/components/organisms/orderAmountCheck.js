/** @format */

import React from "react";
import styled from "styled-components";

import BoldText from "../atoms/boldText";
import NormalText from "../atoms/normalText";
import AmountBox from "../molecules/amountBox";

export default function OrderAmountCheck({
	redesign,
	amount,
	ImgURL,
	setAmount,
}) {
	return (
		<Wrapper>
			<BoldText text='주문 상품 수량' />
			<ProductProfileArea>
				<ProductPic>
					<img className='preview' src={ImgURL} width='80%' />
				</ProductPic>
				<Content>
					<BoldText text='우리 아이 낙서 머그' />
					<Text>리디자인 {redesign}단계</Text>
				</Content>
			</ProductProfileArea>
			<Row>
				<AmountText>수량</AmountText>
				<AmountBox amount={amount} setAmount={setAmount} />
			</Row>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 83%;
`;
const Content = styled.div`
	text-align: left;
`;
const Text = styled.label`
	font-size: 1.5rem;
`;
const ProductPic = styled.div`
	text-align: left;
	max-width: 15rem;
	height: 100%;
`;
const Row = styled.div`
	margin-top: 3vh;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const ProductProfileArea = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 5vh;
	margin-bottom: 5vh;
`;
const AmountText = styled.label`
	font-size: 1.5rem;
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: right;
	margin-right: 1vh;
`;
