/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import OrderIcon from "../atoms/svgFolder/make";
import OrderIconActive from "../atoms/orderIconActive";

export default function Make({ active }) {
	return (
		<Wrapper>
			<Link href='/order' as='/order'>
				<a>
					{active === "make" && (
						<>
							<OrderIconActive />
						</>
					)}
					{active != "make" && (
						<>
							<OrderIcon />
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
