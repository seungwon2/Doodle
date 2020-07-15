/** @format */

import React from "react";
import styled from "styled-components";

export default function Doodle() {
	return (
		<Wrapper>
			<Image>
				<img src='/bigLogo.png' width='49%' />
			</Image>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	flex: 1;
	background-color: white;
	z-index: 100;
	text-align: center;
	align-item: center;
`;
const Image = styled.div`
	margin-top: 48vh;
`;
