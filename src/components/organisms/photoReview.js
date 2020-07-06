/** @format */

import React from "react";
import styled from "styled-components";
import BoldText from "../atoms/boldText";
import { Card } from "antd";

export default function PhotoReview() {
	return (
		<Wrapper>
			<Row>
				<BoldText text='포토 후기' />
			</Row>
			<Row>
				<Card hoverable style={{ width: 240 }}>
					<img alt='example' src='/example.png' height='30px' />
				</Card>
			</Row>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;
const Row = styled.div`
	margin-left: 10%;
	align-item: left;
`;
