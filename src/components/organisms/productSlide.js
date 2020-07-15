/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "antd";

export default function ProductSlide() {
	return (
		<Wrapper>
			<Carousel autoplay>
				<div>
					<img src='/banner1.png' width='100%' />
				</div>
				<div>
					<img src='/banner2.png' width='100%' />
				</div>
				<div>
					<img src='/banner3.png' width='100%' />
				</div>
				<div>
					<img src='/example.png' width='100%' />
				</div>
			</Carousel>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	margin-bottom: 3%;
`;
