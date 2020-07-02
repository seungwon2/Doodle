import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useRouter } from 'next/router';
import BottomBar from "../../src/components/organisms/bottomBar";
import Header from "../../src/components/organisms/header";
import StepIcon1 from "../../src/components/atoms/stepIcon1";
import NextButton from "../../src/components/molecules/nextButton";

export default function Step1() {
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
//   const onClickButton = (e) => {
//     axios.post('http://ec2-15-164-172-128.ap-northeast-2.compute.amazonaws.com/api/user/', Doodle)
//     .then(function (response) {
//       console.log(response);
//       console.log("전송 성공");
//     })
//     .catch(function (error) {
//       console.log(error.response);
//       console.log("전송 실패");
//     })
// };
let profile_preview = null;
    if(ImgURL !== ''){
      profile_preview = <img className='profile_preview' src={ImgURL} height="130%"></img>
      return (
        <Wrapper>
          <Header title="제작하기"/>
          <StepIcon1/>
          <Title>
          Step1<br/>
          우리아이 낙서 사진 업로드
          </Title>
          <Contents>
          아래의 낙서로 리디자인이 진행됩니다.
        </Contents>
        <Thumbnail>{profile_preview}</Thumbnail>
        <FileBox>
        <ButtonChoose for="doodle">다시 선택하기</ButtonChoose>
        <InputFile type="file" 
                   name="doodle" 
                   onChange={onChangeDoodle}
                   id="doodle"
                  />
        </FileBox>
        <NextButton link="/order/step2" buttonName="다음으로"/>
        </Wrapper>
      );
    }
  else{
    return (
      <Wrapper>
        <Header title="제작하기"/>
        <StepIcon1/>
        <Title>
          Step1<br/>
          우리아이 낙서 사진 업로드
        </Title>
        <Contents>
          머그컵에 리디자인 되어 그려질<br/>
          아이의 소중한 낙서를 업로드 해주세요.
        </Contents>
        <Thumbnail/>
        <FileBox>
        <ButtonName for="doodle">사진 업로드</ButtonName>
        <InputFile type="file" 
                   name="doodle" 
                   onChange={onChangeDoodle}
                   id="doodle"
                  />
        </FileBox>
        <BottomBar active="make"/>
      </Wrapper>
    );
  }
  //<DoodleButton onClick={onClickButton}>사진 전송</DoodleButton>
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
 height: 30vh;
 padding-top: 8vh;
`;
const InputFile = styled.input`
  height: 3.75rem;
  position: absolute;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const DoodleButton = styled.button`
  height: 3.75rem;
`;
const Title = styled.label`
  color: rgb(69,69,69);
  font-size: 1.563rem;
  padding-left: 2vw;
  width: 100%;
`;

const Contents = styled.label`
  color: rgb(69,69,69);
  font-size: 1.188rem;
  padding-top: 9vh;
  padding-left: 2vw;
  width: 100%;
`;

const FileBox = styled.div`
  width: 100%;
  margin: auto;
  align-item: center;
  justify-content: center;
  display: flex;
`;

const ButtonName = styled.label`
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  width: 60%;
  height: 8vh;
  margin: auto;
  font-size: 1.25rem;
  line-height: normal;
  background-color: rgb(255, 144, 69);
  cursor: pointer;
  border: 0px;
  box-shadow: 4pt 4pt 6pt 0pt rgba (0, 0, 0, 0.25);
  border-radius: 0.375rem;
  transition: background-color 0.2s;
  align-items: center;
`;

const ButtonChoose = styled.label`
  display: flex;
  justify-content: center;
  color: rgb(69, 69, 69);
  width: 60%;
  height: 8vh;
  margin: auto;
  font-size: 1.25rem;
  line-height: normal;
  background-color: rgb(246, 247, 247);
  cursor: pointer;
  border: 0px;
  box-shadow: 4pt 4pt 6pt 0pt rgba (0, 0, 0, 0.25);
  border-radius: 0.375rem;
  transition: background-color 0.2s;
  align-items: center;
  margin-top: 15vh;
  margin-bottom: 2vh;
`;