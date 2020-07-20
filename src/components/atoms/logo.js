/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Logo() {
	return (
		<Wrapper>
			<Link href='/'>
				<a>
					<LogoImage src='/logo.png' />
				</a>
			</Link>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	margin-top: 3vh;
	margin-bottom: 2vh;
	justify-content: center;
`;
const LogoImage = styled.img`
	width: 40%;
	display: block;
	margin: 0px auto;
`;
