/** @format */

import React from "react";
import styled from "styled-components";

import Main from "../molecules/home.js";
import Make from "../molecules/make.js";
import Mypage from "../molecules/mypage.js";

export default function BottomBar() {
	return (
		<Wrapper>
			<Main />
			<Make />
			<Mypage />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	max-width: 36rem;
	width: 100%;
	padding: 1.38rem 3.6rem 1.8rem 3.6rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0px;
	background-color: white;
`;

const Bar = styled.div`
	max-width: 100%;
	height: 13vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	bottom: 0;
	box-shadow: 0px, -5px, 20px, 0px, rgb(0 0 0, 0.11);
	position: fixed;
	flex-shrink: 0;
	background-color: white;
	padding-left: 13%;
	padding-right: 13%;
`;
