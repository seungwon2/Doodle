/** @format */

import React from "react";
import styled from "styled-components";
import { Collapse } from "antd";
import Questions from "../atoms/questions";
import Ask from "./Ask";

export default function FAQ() {
	const { Panel } = Collapse;
	const callback = (key) => {
		console.log(key);
	};
	return (
		<Wrapper>
			<Grey />
			<Collapse
				onChange={callback}
				ghost
				expandIconPosition='right'
				width='90%'>
				<Panel header='문의하기' key='1'>
					<Ask />
				</Panel>
				<Grey />
				<Panel header='자주 묻는 질문들' key='2'>
					<Questions />
				</Panel>
			</Collapse>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	min-width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Grey = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgb(239, 239, 239);
	width: 100%;
	height: 7px;
	margin-bottom: 1vh;
	margin-top: 1vh;
	height: 7px;
`;
