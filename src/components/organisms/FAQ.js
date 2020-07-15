/** @format */

import React from "react";
import styled from "styled-components";
import { Collapse } from "antd";

export default function FAQ() {
	const { Panel } = Collapse;
	const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
	const callback = (key) => {
		console.log(key);
	};
	return (
		<Wrapper>
			<Collapse
				defaultActiveKey={["1"]}
				onChange={callback}
				width='100%'
				ghost
				expandIconPosition='right'>
				<Panel header='문의하기' key='1'>
					<p>{text}</p>
				</Panel>
				<Panel header='자주 묻는 질문들' key='2'>
					<p>{text}</p>
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
