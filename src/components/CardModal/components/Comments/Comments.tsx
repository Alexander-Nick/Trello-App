import styled from "styled-components";
import { CommentType } from "../../../../store/boardStore/types";
import Comment from "./Comment/Comment";
interface CommentsProps {
  comments: CommentType[];
  chapterIndex: number;
  cardIndex: number;
}

const Comments = ({ comments, chapterIndex, cardIndex }: CommentsProps) => {
  return (
    <CommentsWrap>
      <p>Comments:</p>
      {comments.map((comment, commentIndex) => (
        <Comment
          comment={comment}
          address={{ chapterIndex, cardIndex, commentIndex }}
        />
      ))}
    </CommentsWrap>
  );
};

export default Comments;

const CommentsWrap = styled.div`
  margin: 10px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #fff;
  & p {
    margin-bottom: 5px;
  }
  & div:not(:last-child) {
    margin-bottom: 5px;
  }
`;
