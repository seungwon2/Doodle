/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import OrderIcon from "../atoms/svgFolder/make";
export default function Make() {
	return (
		<Wrapper>
			<Link href='/order' as='/order'>
				<a>
					<OrderIcon width='1.8rem' height='1.8rem' />
					<Label>만들기</Label>
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
