/** @format */

import React from "react";
import styled from "styled-components";
import BoldText from "../atoms/boldText";
import { Card } from "antd";

export default function PhotoReview() {
	return (
		<Wrapper>
			<Text>포토 후기</Text>
			<Row>
				<img src='/photoreview1.png' width='30%' height='30%' />

				<img src='/photoreview2.png' width='30%' height='30%' />

				<img src='/photoreview3.png' width='30%' height='30%' />
			</Row>
			<Row>
				<img src='/photoreview4.png' width='30%' height='30%' />

				<img src='/photoreview5.png' width='30%' height='30%' />

				<img src='/photoreview3.png' width='30%' height='30%' />
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
	margin-left: 5%;
	margin-right: 5%;
	margin-top: 2vh;
	align-item: left;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
`;
const Text = styled.label`
	font-size: 1.7rem;
	font-weight: 500;
	color: rgb(69, 69, 69);
	margin-left: 5%;
	margin-top: 4vh;
`;
