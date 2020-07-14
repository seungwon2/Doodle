/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function MakeButton({ buttonName, handleNext }) {
	return (
		<Wrapper onClick={handleNext}>
			<Button>{buttonName}</Button>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	box-shadow: 4px 4px 6px 0px rgba (0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	z-index: 4;
	color: rgb(255, 255, 255);
	width: 30rem;
	height: 10vh;
	margin: auto;
	font-size: 1.9rem;
	font-weight: 500;
	line-height: normal;
	background-color: rgb(255, 144, 69);
	border: 0px;
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);
	border-radius: 0.375rem;
	-webkit-transition: background-color 0.2s;
	transition: background-color 0.2s;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-bottom: -2vh;
	position: fixed;
	bottom: 18vh;
`;
