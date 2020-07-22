/** @format */

import React from "react";
import styled from "styled-components";
import Kakao from "../molecules/kakao";

export default function Ask() {
	return (
		<Wrapper>
			<Kakao />
			<MailInfo>
				혹은 doodle.official@gmail.com로
				<br />
				연락주시면 빠르게 도움 드리겠습니다.
			</MailInfo>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const MailInfo = styled.label`
	font-size: 1.5rem;
	margin-top: 4vh;
`;
