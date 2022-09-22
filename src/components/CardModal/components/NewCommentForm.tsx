import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import {
  selectName,
  useAppSelector,
} from "../../../store/boardStore/selectors";
import { addComment } from "../../../store/boardStore/reducers";

interface NewCommentFromProps {
  chapterIndex: number;
  cardIndex: number;
}
interface FormType {
  content: "string";
}
const NewCommentForm = ({ chapterIndex, cardIndex }: NewCommentFromProps) => {
  const { register, handleSubmit } = useForm<FormType>();
  const dispatch = useDispatch();
  const userName = useAppSelector(selectName);
  const onSubmit = (data: FormType) => {
    const newComment = {
      id: uuidv4(),
      author: userName,
      content: data.content,
    };
    dispatch(addComment({ chapterIndex, cardIndex, newComment }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CommentTextArea
        {...register("content", {
          required: true,
        })}
        placeholder="Your comment"
      ></CommentTextArea>
      <CommentButton>
        <button type="submit">Comment</button>
      </CommentButton>
    </form>
  );
};

export default NewCommentForm;

const CommentTextArea = styled.textarea`
  width: 94%;
  padding: 3px;
  height: 100px;
  display: block;
  margin: 0 auto;
  border-radius: 3px;
  overflow: auto;
`;
const CommentButton = styled.div`
  display: flex;
  margin: 5px;
  justify-content: end;
`;
