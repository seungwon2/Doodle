/** @format */

import React from "react";
import styled from "styled-components";
import { Collapse } from "antd";
import Questions from "../atoms/questions";

export default function FAQ() {
	const { Panel } = Collapse;
	const callback = (key) => {
		console.log(key);
	};
	return (
		<Wrapper>
			<Collapse
				defaultActiveKey={["1"]}
				onChange={callback}
				ghost
				expandIconPosition='right'
				width='90%'>
				<Panel header='문의하기' key='1'>
					<p>text</p>
				</Panel>
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
