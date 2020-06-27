import { PostContent } from "../types/Post";

export interface IPost {
  id: string;
  createdAt: string;
  creator: string;
  profileImageUrl: string;
  content: PostContent;
  likeCount: number;
}
