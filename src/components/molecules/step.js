/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Steps, Divider } from "antd";
export default function Step({ redesign, setRedesign }) {
	const { Step } = Steps;
	const [current, setCurrent] = useState(0);
	const onClick = (key) => {
		console.log("onChange:", redesign);
		setRedesign(key);
		setCurrent(key);
	};
	return (
		<Wrapper>
			<Steps current={current} onChange={onClick}>
				<Step title='1단계' description='원본' />
				<Step title='2단계' description='선 정리' />
				<Step title='3단계' description='선 정리 + 색상 추가' />
			</Steps>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 83%;
	margin-bottom: 5vh;
`;
