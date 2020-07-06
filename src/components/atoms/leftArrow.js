/** @format */

import React from "react";
import styled from "styled-components";

export default function LeftArrow() {
	return (
		<div>
			<IconImage src='/leftArrow.png' />
		</div>
	);
}

const IconImage = styled.img`
	height: 1.25rem;
`;
