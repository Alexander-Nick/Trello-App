import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  deleteComment,
  editComment,
} from "../../../../../store/boardStore/reducers";
import {
  useAppSelector,
  selectName,
} from "../../../../../store/boardStore/selectors";
import {
  AddressType,
  CommentType,
} from "../../../../../store/boardStore/types";
interface CommentProps {
  comment: CommentType;
  address: AddressType;
}
const Comment = ({ comment, address }: CommentProps) => {
  const userName = useAppSelector(selectName);
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(false);
  const [editCommentInputValue, setCommentInputValue] = useState(
    comment.content
  );
  const checkIfEnter = (event: React.KeyboardEvent) => {
    if (event.code === "Enter" && editCommentInputValue) {
      setActive(false);
      dispatch(editComment({ address, newComment: editCommentInputValue }));
    }
  };
  const changeCommentValue = (event: React.FormEvent<HTMLInputElement>) => {
    setCommentInputValue(event.currentTarget.value);
  };
  const checkOwner = () => {
    if (comment.author === userName) {
      setActive(true);
    }
  };
  return (
    <CommentWrap key={comment.id}>
      {active ? (
        <EditCommentInput
          value={editCommentInputValue}
          onChange={changeCommentValue}
          onKeyDown={checkIfEnter}
        />
      ) : (
        <p onClick={checkOwner}>
          {comment.author} says: {comment.content}
        </p>
      )}
      <Buttons>
        <button
          onClick={() => {
            dispatch(deleteComment({ address }));
          }}
        >
          Del
        </button>
      </Buttons>
    </CommentWrap>
  );
};

export default Comment;

const CommentWrap = styled.div`
  background-color: #e8e8e8;
  padding: 3px 3px 2px 3px;
  border-radius: 3px;
  justify-content: space-between;
  display: flex;
  & :not(:last-child) {
    margin-bottom: 5px;
  }
  & p {
    text-align: justify;
    cursor: pointer;
  }
`;
const Buttons = styled.div`
  display: flex;
  margin-left: 3px;
  & button:not(:last-child) {
    margin-right: 5px;
  }
  & button {
    height: 28px;
  }
`;
const EditCommentInput = styled.input`
  width: 90%;
`;
