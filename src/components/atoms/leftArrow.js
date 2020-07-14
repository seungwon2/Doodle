/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function LeftArrow({ link }) {
	return (
		<div>
			<Link href={link}>
				<a>
					<IconImage src='/leftArrow.png' />
				</a>
			</Link>
		</div>
	);
}

const IconImage = styled.img`
	height: 1.25rem;
	margin-bottom: 0.8vh;
`;
