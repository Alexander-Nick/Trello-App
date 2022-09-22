import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  changeCardDescription,
  changeCardName,
} from "../../../store/boardStore/reducers";
import { CardType } from "../../../store/boardStore/types";
interface TitleProps {
  card: CardType;
  chapterIndex: number;
  cardIndex: number;
  controlCardModal: (flag: boolean) => void;
  chapterName: string;
}

const Title = ({
  controlCardModal,
  chapterName,
  card,
  chapterIndex,
  cardIndex,
}: TitleProps) => {
  const dispatch = useDispatch();
  const [showTitle, setShowTitle] = useState("title");
  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");
  const changeTheme = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      setShowTitle("title");
      dispatch(
        changeCardName({ chapterIndex, newName: inputValue, cardIndex })
      );
      setInputValue("");
    }
  };

  const changeDescription = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      setActive(false);
      dispatch(
        changeCardDescription({
          chapterIndex,
          cardIndex,
          newDescription: inputValue,
        })
      );
      setInputValue("");
    }
  };
  const themeClicked = () => {
    setInputValue("");
    setShowTitle("input");
    setActive(false);
  };
  const changeDescriptionValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const deleteDescription = () => {
    dispatch(
      changeCardDescription({ chapterIndex, cardIndex, newDescription: "..." })
    );
  };
  return (
    <TitleWrap>
      <TitleFlexWrap>
        <h2>Author: {card.author}</h2>
        <button
          onClick={() => {
            controlCardModal(false);
          }}
        >
          X
        </button>
      </TitleFlexWrap>
      <ThemeWrap>
        <p>{chapterName}</p>
        {showTitle === "title" ? (
          <h2 onClick={themeClicked}>{card.theme}</h2>
        ) : (
          <TitleInput
            onKeyDown={changeTheme}
            value={inputValue}
            onChange={(event: React.FormEvent<HTMLInputElement>) => {
              setInputValue(event.currentTarget.value);
            }} /* onChange={(event: React.FormEvent<HTMLInputElement>) => { renameCard(chapterIndex, cardIndex, event.currentTarget.value) }} */
          />
        )}
      </ThemeWrap>
      <DescriptionTitle>Description:</DescriptionTitle>
      <FlexForDescription>
        {active ? (
          <NewDescriptionInput
            onKeyPress={changeDescription}
            value={inputValue}
            onChange={changeDescriptionValue}
            type="text"
          />
        ) : (
          <DescriptionWrap
            onClick={() => {
              setActive(true);
              setShowTitle("title");
              setInputValue("");
            }}
          >
            <p>{card.description}</p>
          </DescriptionWrap>
        )}
        <Buttons>
          <button onClick={deleteDescription}>Del</button>
        </Buttons>
      </FlexForDescription>
    </TitleWrap>
  );
};
export default Title;

const DescriptionTitle = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`;
const TitleFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleWrap = styled.div`
  margin: 10px;
`;
const ThemeWrap = styled.div`
  margin: 20px 0;
  & p {
    justify-self: start;
    font-weight: 500;
    font-style: italic;
  }
  & h2 {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
`;
const DescriptionWrap = styled.div`
  padding: 5px;
  border-radius: 3px;
  background-color: #e8e8e8;
  & p {
    cursor: pointer;
    height: 18px;
  }
`;
const NewDescriptionInput = styled.input`
  height: 18px;
  width: 80%;
  padding: 2px;
  border-radius: 2px;
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
const TitleInput = styled.input`
  height: 18px;
  margin: 0 auto;
  display: block;
  border-radius: 2px;
`;
const FlexForDescription = styled.div`
  padding: 5px;
  border-radius: 3px;
  background-color: #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 50px;
`;
