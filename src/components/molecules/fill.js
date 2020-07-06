/** @format */

import React from "react";
import styled from "styled-components";

export default function Fill() {
	return (
		<Wrapper>
			<Button>위와 동일하게 채우기</Button>
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
const Button = styled.button`
	border: 0px, transparent;
`;
