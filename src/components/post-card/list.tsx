import React from "react";
import styled from "styled-components";

import Post, { PostCardProps } from ".";

export type PostCardListProps = { postList: PostCardProps[] };

export default function PostList({ postList }: PostCardListProps) {
  return (
    <Wrapper>
      {postList.map((post, index) => (
        <>
          <Post {...(post as PostCardProps)} />
          {index !== postList.length - 1 && <Line />}
        </>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

const Line = styled.div`
  width: 100%;
  height: 0.4rem;
  background-color: lightGrey;
`;
