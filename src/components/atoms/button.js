/** @format */

import React from "react";
import styled from "styled-components";

export default function Button() {
	return (
		<Wrapper>
			<MainButton />
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
const MainButton = styled.button`
	width: 6rem;
	height: 3rem;
`;
