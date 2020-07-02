import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function NextButton({link, buttonName}) {
  return (
      <Wrapper>
          <Link href={link}>
          <a>
          <Button>{buttonName}</Button>
          </a>
          </Link>
      </Wrapper>
  );
}
const Wrapper = styled.div`
    width:100%;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    color: rgb(255, 255, 255);
    width: 60%;
    height: 8vh;
    margin: auto;
    font-size: 1.25rem;
    line-height: normal;
    background-color: rgb(255, 144, 69);
    border: 0px;
    box-shadow: 4pt 4pt 6pt 0pt rgba (0, 0, 0, 0.25);
    border-radius: 0.375rem;
    transition: background-color 0.2s;
    align-items: center;
`;