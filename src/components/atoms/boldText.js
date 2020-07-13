/** @format */

import React from "react";
import styled from "styled-components";

export default function BoldText({ text }) {
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
	font-size: 1.9rem;
	font-weight: bold;
	color: rgb(69, 69, 69);
`;
