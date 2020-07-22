/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Kakao() {
	return (
		<Wrapper
			href='https://pf.kakao.com/_Yehxgxb'
			target='_blank/'
			style={{ textDecoration: "none", color: "black" }}>
			<KaKaoIcon>
				<img src='/kakao.png' width='90%' />
			</KaKaoIcon>
			<Text>카카오톡 문의 바로가기</Text>
		</Wrapper>
	);
}
const Wrapper = styled.a`
	width: 40vh;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 3vh;
	background-color: rgba (0, 0, 0, 0.16);
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
const Text = styled.label`
	font-size: 1.5rem;
	align-items: center;
	margin-bottom: 0;
	width: fit-content;
	margin: auto;
`;
const KaKaoIcon = styled.div`
	width: 5vh;
	height: 100%;
	margin-left: 2.5vh;
`;
