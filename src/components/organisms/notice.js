/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Notice() {
	return (
		<Wrapper>
			<Title>확인해주세요!</Title>
			<Text>
				-&nbsp;벽, 바닥의 낙서 등 배경과 화질에 상관없이 <br />
				&nbsp;&nbsp;&nbsp;모두 업로드 가능해요.
			</Text>
			<Text>
				-&nbsp;여러 도안으로 단체주문시 <br />
				&nbsp;&nbsp;&nbsp;카카오톡 채널(ID:doodle_official), <br />
				&nbsp;&nbsp;&nbsp;doodle.offical20@gmail.com로 문의바랍니다.
			</Text>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	height: content-fit;
	distplay: flex;
	flex-direction: column;
	margin-top: 6vh;
	margin-bottom: 6vh;
	padding-left: 4vh;
	padding-right: 4vh;
	background: rgb(247, 247, 247);
	padding-top: 3vh;
	padding-bottom: 2vh;
	margin-left: 2.5vh;
	margin-right: 2.5vh;
`;

const Text = styled.label`
	font-size: 1.4rem;
	margin-bottom: 2vh;
	width: 100%;
`;

const Title = styled.label`
	font-size: 1.4rem;
	margin-bottom: 2vh;
	width: 100%;
	font-weight: 500;
`;
