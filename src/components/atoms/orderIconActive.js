/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function OrderIconActive() {
	return (
		<Wrapper>
			<Image src='/makeActive.png' />
		</Wrapper>
	);
}
const Wrapper = styled.div``;
const Image = styled.img`
	width: 2.57rem;
	height: 2.5rem;
`;
