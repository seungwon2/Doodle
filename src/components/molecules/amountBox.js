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
			<Leftbutton onClick={handleMinus}>-</Leftbutton>
			<Amount>{amount}개</Amount>
			<RightButton onClick={handlePlus}>+</RightButton>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;
const RightButton = styled.button`
	border: 0.3px solid rgb(122, 122, 122);
	background-color: rgba(0, 0, 0, 0);
	color: rgb(122, 122, 122);
	padding: 0.8rem;
	border-left-width: 0px;
	font-size: 1.3rem;
`;

const Leftbutton = styled.button`
	border: 0.3px solid rgb(122, 122, 122);
	background-color: rgba(0, 0, 0, 0);
	color: rgb(122, 122, 122);
	padding: 0.8rem;
	border-right-width: 0px;
	font-size: 1.3rem;
`;

const Amount = styled.label`
	border-top: 0.3px solid rgb(122, 122, 122);
	border-bottom: 0.3px solid rgb(122, 122, 122);
	border-left: 0px;
	border-right: 0px;
	padding: 0.8rem;
	margin-bottom: 0;
	padding-left: 4rem;
	padding-right: 4rem;
	font-size: 1.3rem;
`;
