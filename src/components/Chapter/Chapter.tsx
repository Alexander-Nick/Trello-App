import { useState } from "react";
import styled from "styled-components";
import { ChapterType } from "../../store/boardStore/types";
import ChapterHeader from "./components/Header/ChapterHeader";
import NewCardModal from "../NewCardModal/NewCardModal";
import Card from "../Card/Card";
interface ChapterProps {
  chapter: ChapterType;
  chapterIndex: number;
}

const Chapter = ({ chapter, chapterIndex }: ChapterProps) => {
  const [active, setActive] = useState(false);
  const cards = chapter.cards.map((card, cardIndex) => (
    <Card
      chapterName={chapter.title}
      card={card}
      cardIndex={cardIndex}
      chapterIndex={chapterIndex}
    />
  ));
  const controlNewCardModal = (flag: boolean) => {
    setActive(flag);
  };
  return (
    <ChapterWrap key={chapter.id}>
      <ChapterHeader chapterIndex={chapterIndex} title={chapter.title} />
      {cards}
      <NewCardButton
        onClick={() => {
          setActive(true);
        }}
      >
        New Card
      </NewCardButton>
      {active ? (
        <NewCardModal
          controlNewCardModal={controlNewCardModal}
          chapterIndex={chapterIndex}
        />
      ) : (
        <></>
      )}
    </ChapterWrap>
  );
};

export default Chapter;

const ChapterWrap = styled.div`
  min-width: 250px;
  padding: 10px;
  border-radius: 3px;
  background: #e2edcc;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const NewCardButton = styled.button`
  margin: 5px 0;
`;
