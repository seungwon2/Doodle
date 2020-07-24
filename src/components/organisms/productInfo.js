/** @format */

import React from "react";
import styled from "styled-components";
import BoldText from "../atoms/boldText";

export default function ProductInfo() {
	return (
		<Wrapper>
			<Row>
				<Text>우리아이 낙서 머그</Text>
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
	display: flex;
	width: 90%;
	margin-left: 5%;
`;
const LineText = styled.label`
	text-decoration: line-through;
	margin-right: 2.3%;
    font-size: 1.4rem;
    align-items: center;
    margin-top: 0.2vh;
}
`;
const OrangeText = styled.label`
	color: rgb(255, 144, 69);
	margin-right: 3%;
	font-size: 1.6rem;
	font-weight: 600;
`;
const ShipText = styled.label`
	color: rgb(255, 144, 69);
	font-size: 1.6rem;
	font-weight: 600;
`;
const Text = styled.label`
	font-size: 1.9rem;
	font-weight: 500;
	color: rgb(69, 69, 69);
`;
