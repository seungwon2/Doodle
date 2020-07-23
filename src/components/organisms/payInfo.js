/** @format */

import React from "react";
import styled from "styled-components";

import BoldText from "../atoms/boldText";
import NormalText from "../atoms/normalText";

export default function PayInfo() {
	return (
		<Wrapper>
			<BoldText text='결제 수단' />
			<Content>
				<BoldText text='무통장 입금' />
				<NormalText text='현재 두들은 무통장 결제만을 지원합니다.' />
				<NormalText text='곧 다양한 결제 수단과 함께 찾아뵙겠습니다 :)' />
			</Content>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 83%;
`;
const Content = styled.div`
	text-align: center;
	margin-top: 4vh;
	margin-bottom: 4vh;
	margin-top: auto;
`;
