/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import HomeIcon from "../atoms/svgFolder/home";
export default function Main({ active }) {
	return (
		<Wrapper>
			<Link href='/'>
				<a>
					{active === "home" && (
						<>
							<HomeIcon color='#ff9045' width='4vh' height='4vh' />
						</>
					)}
					{active != "home" && (
						<>
							<HomeIcon color='#666' width='4vh' height='4vh' />
						</>
					)}
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
	margin-top: 3.2vh;
	z-index: 3;
`;
const Label = styled.label`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: rgb(112, 112, 112);
	font-size: 1.3rem;
	text-align: center;
	margin-top: 0.7vh;
`;
