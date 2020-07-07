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
			<Content>
				<img className='preview' src={ImgURL} width='80%' />
				<BoldText text='우리 아이 낙서 머그' />
				<Text>리디자인 {redesign}단계</Text>
			</Content>
			<AmountBox amount={amount} setAmount={setAmount} />
			<NormalText text='수량' />
		</Wrapper>
	);
}
const Wrapper = styled.div``;
const Content = styled.div`
	text-align: center;
`;
const Text = styled.label`
	font-size: 1rem;
`;
