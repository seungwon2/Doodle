import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useRouter } from 'next/router';
import BottomBar from "../../src/components/organisms/bottomBar";
import Header from "../../src/components/organisms/header";

export default function Order() {
  const [ImgURL, setImgURL] = useState('');
  const [Doodle, setDoodle] = useState('');
  const onChangeDoodle = (event) => {

    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setDoodle(file);
      setImgURL(reader.result);
    }
    reader.readAsDataURL(file);

  };
  const onClickButton = (e) => {
    axios.post('http://ec2-15-164-172-128.ap-northeast-2.compute.amazonaws.com/api/user/', Doodle)
    .then(function (response) {
      console.log(response);
      console.log("전송 성공");
    })
    .catch(function (error) {
      console.log(error.response);
      console.log("전송 실패");
    })
};
let profile_preview = null;
    if(ImgURL !== ''){
      profile_preview = <img className='profile_preview' src={ImgURL} height="100%"></img>
    }
  return (
    <Wrapper>
      <Header title="제작하기"/>
      <Thumbnail>{profile_preview}</Thumbnail>
      <InputFile type="file" 
                 name="doodle" 
                 onChange={onChangeDoodle}/>
      <DoodleButton onClick={onClickButton}>사진 전송</DoodleButton>
      <PhotoCheck></PhotoCheck>
      <BottomBar active="make"/>
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
const Thumbnail = styled.div`
 backgroundColor: #efefef;
 height: 5rem;
`;
const InputFile = styled.input`

`;

const DoodleButton = styled.button`

`;
const PhotoCheck = styled.img`

`;