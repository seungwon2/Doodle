/** @format */

import React from "react";
import styled from "styled-components";

export default function StepIcon({ imgPath }) {
	return (
		<Wrapper>
			<IconImage src={imgPath} />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	height: fit-content;
	align-item: right;
	width: 100%;
	margin-right: 2.5rem;
	margin-top: 1.2rem;
	margin-bottom: 0.6rem;
`;
const IconImage = styled.img`
	height: 1.6rem;
`;
