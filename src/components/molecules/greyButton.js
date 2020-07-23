/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function GreyButton({ link, buttonName }) {
	return (
		<Wrapper>
			<Link href={link}>
				<a>
					<Button>{buttonName}</Button>
				</a>
			</Link>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	color: rgb(69, 69, 69);
	width: 30rem;
	height: 10vh;
	margin: auto;
	font-size: 1.9rem;
	line-height: normal;
	font-weight: 500;
	background-color: rgb(246, 247, 247);
	cursor: pointer;
	border: 0px;
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);
	border-radius: 0.375rem;
	transition: background-color 0.2s;
	align-items: center;
	margin-top: 15vh;
	margin-bottom: 2vh;
`;
