import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteCard } from "../../../store/boardStore/reducers";
interface TitleProps {
  theme: string;
  chapterIndex: number;
  cardIndex: number;
}
const Title = ({ theme, chapterIndex, cardIndex }: TitleProps) => {
  const dispatch = useDispatch();
  const deleteCardClicked = (event: React.SyntheticEvent<EventTarget>) => {
    event.stopPropagation();
    dispatch(deleteCard({ chapterIndex, cardIndex }));
  };
  return (
    <TitleWrap>
      <p>{theme}</p>
      <button onClick={deleteCardClicked}>X</button>
    </TitleWrap>
  );
};
export default Title;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
