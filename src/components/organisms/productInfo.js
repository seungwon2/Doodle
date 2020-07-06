/** @format */

import React from "react";
import styled from "styled-components";
import BoldText from "../atoms/boldText";

export default function ProductInfo() {
	return (
		<Wrapper>
			<Row>
				<BoldText text='우리아이 낙서 머그' />
			</Row>
			<Row>
				<LineText>20,000원</LineText>
				<OrangeText>14,000원</OrangeText>
				<ShipText>무료배송 이벤트 중!</ShipText>
			</Row>
		</Wrapper>
	);
}
const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center
  margin-top: 500%;
`;
const Row = styled.div`
	font-size: 1rem;
	display: flex;
	width: 50%;
	margin-left: 5%;
`;
const LineText = styled.label`
	text-decoration: line-through;
	margin-right: 4%;
`;
const OrangeText = styled.label`
	color: rgb(255, 144, 69);
	margin-right: 3%;
`;
const ShipText = styled.label`
	color: rgb(255, 144, 69);
	font-size: 0.9rem;
`;
