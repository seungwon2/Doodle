/** @format */

import React from "react";
import styled from "styled-components";

import Main from "../molecules/home.js";
import Make from "../molecules/make.js";
import Mypage from "../molecules/mypage.js";

export default function BottomBar({ active }) {
	return (
		<Wrapper>
			<Main active={active} />
			<Make active={active} />
			<Mypage active={active} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	z-index: 5;
	max-width: 38rem;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	position: fixed;
	bottom: 0px;
	background-color: white;
	height: 13vh;
	box-shadow: 0px -5px 20px 0px rgba(0, 0, 0, 0.11);
`;
