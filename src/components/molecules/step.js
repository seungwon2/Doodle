/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { Steps, Divider } from "antd";
export default function Step({
	redesign,
	setRedesign,
	setRedesignExample,
	ImgURL,
}) {
	const { Step } = Steps;
	const [current, setCurrent] = useState(0);
	const onClick = (key) => {
		console.log("onChange:", redesign);
		setCurrent(key);
		if (key == 0) {
			console.log("2단계");
			setRedesignExample(ImgURL);
			setRedesign(key + 1);
		} else if (key == 1) {
			console.log("2단계");
			setRedesignExample("/redesign2.png");
			setRedesign(key + 1);
		} else if (key == 2) {
			console.log("2단계");
			setRedesignExample("/redesign3.png");
			setRedesign(key + 1);
		}
	};
	return (
		<StepArea>
			<Steps current={current} onChange={onClick}>
				<Step title='1단계' description='원본' />
				<Step title='2단계' description='선 정리' />
				<Step title='3단계' description='선 정리 + 색상 추가' />
			</Steps>
		</StepArea>
	);
}

const StepArea = styled.div`
	width: 83%;
	margin-bottom: 5vh;
`;
