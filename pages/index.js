/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import { DatePicker, Slider } from "antd";

import BottomBar from "../src/components/organisms/bottomBar.js";
import Logo from "../src/components/atoms/logo.js";
import MainBanner from "../src/components/molecules/mainbanner.js";
import PhotoReview from "../src/components/organisms/photoReview.js";
import Phantom from "../src/components/organisms/phantom.js";
import SlideShow from "../src/components/organisms/slide";

export default function Home() {
	return (
		<Wrapper>
			<Logo />
			<MainBanner />
			<PhotoReview />
			{/* <SlideShow /> */}
			<Phantom />
			<BottomBar active='home' />
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
