/** @format */

import React from "react";
import styled from "styled-components";
import BoldText from "../atoms/boldText";

export default function Review() {
	return (
		<Wrapper>
			<Row>
				<BoldText text='리뷰' />
			</Row>
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
const Row = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 100px;
`;
