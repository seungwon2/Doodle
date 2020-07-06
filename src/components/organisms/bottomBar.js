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
	padding: 1.38rem 3.6rem 1.8rem 3.6rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0px;
	background-color: white;
	height: 10.5rem;
	box-shadow: 0px -5px 20px 0px rgba(0, 0, 0, 0.11);
`;
