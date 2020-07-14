/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import MypageIcon from "../atoms/svgFolder/mypage";

export default function Mypage({ active }) {
	return (
		<Wrapper>
			<Link href='/mypage'>
				<a>
					{active === "mypage" && (
						<>
							<MypageIcon color='#ff9045' />
						</>
					)}
					{active != "mypage" && (
						<>
							<MypageIcon color='#666' />
						</>
					)}

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
	margin-top: 3.2vh;
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
