/** @format */

import React from "react";
import styled from "styled-components";

export default function Grey() {
	return (
		<Wrapper>
			<Line />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgb(239, 239, 239);
	height: 7px;
	margin-bottom: 3vh;
	margin-top: 3vh;
	height: 7px;
`;
const Line = styled.div`
	background-color: rgb(239, 239, 239);
	width: 100%;
	height: 7px;
`;
