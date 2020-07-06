/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import HomeIcon from "../atoms/svgFolder/home";
export default function Main() {
	return (
		<Wrapper>
			<Link href='/'>
				<a>
					<HomeIcon width='1.8rem' height='1.8rem' />
					<Label>홈</Label>
				</a>
			</Link>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;
const Label = styled.label`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: black;
	font-size: 0.8125rem;
`;
