import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useRouter } from 'next/router';
import { DatePicker } from 'antd';

import BottomBar from '../src/components/organisms/bottomBar.js';
import Logo from '../src/components/atoms/logo.js'
import MainBanner from "../src/components/molecules/mainbanner.js";
import PhotoReview from "../src/components/organisms/photoReview.js";

export default function Home() {

  return (
    <Wrapper>
      <Logo/>
      <MainBanner></MainBanner>
      <PhotoReview></PhotoReview>
      <DatePicker/>
      <BottomBar/>
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
