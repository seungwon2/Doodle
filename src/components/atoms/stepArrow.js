/** @format */

import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function StepArrow({ step, setStep }) {
	const handleStepBack = () => {
		setStep(step - 1);
	};
	return (
		<div>
			<IconImage onClick={handleStepBack} src='/leftArrow.png' />
		</div>
	);
}

const IconImage = styled.img`
	height: 1.25rem;
`;
