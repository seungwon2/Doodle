/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";

import LeftArrow from "../atoms/leftArrow";
import StepArrow from "../atoms/stepArrow";

export default function OrderHeader({ title, step, setStep }) {
	return (
		<Wrapper>
			<StepArrow step={step} setStep={setStep} />
			<Title>{title}</Title>
			<Link href='/'>
				<a>
					<Home>홈</Home>
				</a>
			</Link>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	color: rgba(0, 0, 0, 0.65);
	font-size: 14px;
	font-variant: tabular-nums;
	line-height: 1.5715;
	list-style: none;
	font-feature-settings: "tnum", "tnum";
	position: relative;
	padding: 16px 24px;
	background-color: #fff;
	width: 100%;
	height: 7vh;
	justify-content: space-between;
	align-items: baseline;
`;
const Title = styled.label`
	font-size: 1.7rem;
	color: rgb(69, 69, 69);
`;
const Home = styled.label`
	font-size: 1.7rem;
	color: rgb(69, 69, 69);
`;
