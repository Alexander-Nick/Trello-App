import styled from "styled-components";
interface CommentsProps {
  commentsNumber: number;
}
const CommentsQuantity = ({ commentsNumber }: CommentsProps) => {
  return (
    <CommentsWrap>
      <img src="./comment.svg" alt="=(" />
      <p>{commentsNumber}</p>
    </CommentsWrap>
  );
};
export default CommentsQuantity;

const CommentsWrap = styled.div`
  display: flex;
  width: 10px;
  & p {
    margin-left: 3px;
  }
`;
