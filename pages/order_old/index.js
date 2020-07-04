import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useRouter } from 'next/router';
import { DatePicker } from 'antd';
import Logo from "../../src/components/atoms/logo";
import BottomBar from "../../src/components/organisms/bottomBar";
import ProductSlide from "../../src/components/organisms/productSlide";
import ProductInfo from "../../src/components/organisms/productInfo";
import ProductInfoPic from "../../src/components/organisms/productInfoPic";
import Review from "../../src/components/organisms/review";


export default function Order() {

  return (
    <Wrapper>
      <Logo/>
      <ProductSlide />
      <ProductInfo />
      <ProductInfoPic />
      <Review/>
      <BottomBar active="make"/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
