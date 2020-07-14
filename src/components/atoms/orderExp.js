/** @format */

import React from "react";
import styled from "styled-components";

export default function OrderExp({ text }) {
	return (
		<Wrapper>
			<Label>{text}</Label>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: right;
`;
const Label = styled.label`
	color: rgb(69, 69, 69);
	font-size: 1.6rem;
	padding-left: 5vw;
	width: 100%;
	margin-bottom: -0.6vh;
`;
