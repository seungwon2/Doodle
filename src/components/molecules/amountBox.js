/** @format */

import React from "react";
import styled from "styled-components";

export default function AmountBox({ amount, setAmount }) {
	const handleMinus = (e) => {
		setAmount(amount - 1);
	};
	const handlePlus = (e) => {
		setAmount(amount + 1);
	};
	return (
		<Wrapper>
			<Button onClick={handleMinus}>-</Button>
			<Amount>{amount}개</Amount>
			<Button onClick={handlePlus}>+</Button>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Button = styled.button``;
const Amount = styled.label``;
