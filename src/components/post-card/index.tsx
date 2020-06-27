import React from "react";
import styled from "styled-components";

import Header, { PostCardHeaderProps } from "./header";
import Content, { PostCardContentProps } from "./content";
import Footer, { PostCardFooterProps } from "./footer";

export type PostCardProps = PostCardHeaderProps & {
  content: PostCardContentProps;
} & PostCardFooterProps;

export default function PostCard(props: PostCardProps) {
  return (
    <Wrapper>
      <Header {...(props as PostCardHeaderProps)} />
      <Content {...(props.content as PostCardContentProps)} />
      <Footer {...(props as PostCardFooterProps)} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
