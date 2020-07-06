/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import MypageIcon from "../atoms/svgFolder/mypage";

export default function Mypage() {
	return (
		<Wrapper>
			<Link href='/mypage'>
				<a>
					<MypageIcon width='1.8rem' height='1.8rem' />
					<Label>마이페이지</Label>
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
`;
