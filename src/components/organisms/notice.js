/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Notice() {
	return (
		<Wrapper>
			<Text>확인해주세요!</Text>
			<Text>
				-&nbsp;벽, 바닥의 낙서 등 배경과 화질에 상관없이 <br />
				&nbsp;&nbsp;&nbsp;모두 업로드 가능해요.
			</Text>
			<Text>
				-&nbsp;여러 도안으로 단체주문시 <br />
				&nbsp;&nbsp;&nbsp;카카오톡 채널(ID:doodle_official), <br />
				&nbsp;&nbsp;&nbsp;doodle.offical20@gmail.com로 문의바랍니다.
			</Text>
			{/* <Text>
				머그컵에 리디자인 될 <br />
				아이의 소중한 낙서를 업로드 해주세요.
			</Text> */}
		</Wrapper>
	);
}
const Wrapper = styled.div`
	height: content-fit;
	width: 100%;
	distplay: flex;
	flex-direction: column;
	margin-top: 6vh;
	margin-bottom: 6vh;
	padding-left: 5vh;
`;

const Text = styled.label`
	font-size: 1.3rem;
	margin-bottom: 2vh;
	width: 100%;
`;
