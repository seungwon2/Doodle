/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import OrderIconActive from "../atoms/svgFolder/makeActive";
import OrderIcon from "../atoms/svgFolder/make";

export default function Make({ active }) {
	return (
		<Wrapper>
			<Link href='/order' as='/order'>
				<a>
					{active === "make" && (
						<>
							<OrderIcon width='4.6vh' height='4.4vh' color='#ff9045' />
						</>
					)}
					{active != "make" && (
						<>
							<OrderIcon width='4.6vh' height='4.4vh' color='#666' />
						</>
					)}
					<Label>제작하기</Label>
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
	margin-top: 2.7vh;
	z-index: 3;
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
