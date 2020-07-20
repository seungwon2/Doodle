/** @format */

import React from "react";
import styled from "styled-components";

export default function Questions() {
	return (
		<>
			<Grey />
			<QuestionCard>
				<Question>1. 주문하면 언제 받을 수 있나요?</Question>
				<Answer>영업일 기준 평균 3~5일 후에 수령하실 수 있습니다.</Answer>
			</QuestionCard>
			<Grey />
			<QuestionCard>
				<Question>2. 머그컵을 각각 다르게 인쇄 제작 가능한가요?</Question>
				<Answer>
					네, Doodle 서비스는 1머그 1디자인 서비스로 머그잔 별로 각각 다르게
					인쇄 제작하실 수 있습니다.
				</Answer>
			</QuestionCard>
			<Grey />
			<QuestionCard>
				<Question>3. 인터넷 주문이 어려운데, 전화 주문도 가능한가요?</Question>
				<Answer>
					네, 카카오톡 플러스친구 doodle_official 혹은
					doodle.official20@gmail.com으로 연락주시면 빠르게 도움드리겠습니다.
				</Answer>
			</QuestionCard>
			<Grey />
			<QuestionCard>
				<Question>4. 대량제작 관련 문의</Question>
				<Answer>
					단체 주문의 경우 카카오톡 플러스친구 doodle_official 혹은
					doodle.official20@gmail.com으로 연락주시면 빠르게 도움드리겠습니다 :)
				</Answer>
			</QuestionCard>
		</>
	);
}
const QuestionCard = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 3vh;
	margin-right: 3vh;
`;
const Grey = styled.div`
	background-color: rgb(239, 239, 239);
	width: 39rem;
	margin: 0;
	height: 1px;
`;
const Question = styled.div`
	font-size: 1.3rem;
	font-weight: 500;
	margin-top: 4vh;
`;
const Answer = styled.div`
	background-color: rgb(247, 247, 247);
	font-size: 1.3rem;
	margin: 4vh;
	padding: 2vh;
`;
