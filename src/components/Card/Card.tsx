import { useState } from "react";
import styled from "styled-components";
import { CardType } from "../../store/boardStore/types";
import CardModal from "../CardModal/CardModal";
import CommentsQuantity from "./components/CommentsQuantity";
import Title from "./components/Title";
interface CardProps {
  card: CardType;
  chapterIndex: number;
  cardIndex: number;
  chapterName: string;
}

const Card = ({ card, chapterName, chapterIndex, cardIndex }: CardProps) => {
  const [cardModalShow, setCardModalShow] = useState(false);
  const controlCardModal = (flag: boolean) => {
    setCardModalShow(flag);
  };
  return (
    <>
      <CardWrap
        onClick={() => {
          controlCardModal(true);
        }}
        key={card.id}
      >
        <CardContent>
          <Title
            chapterIndex={chapterIndex}
            cardIndex={cardIndex}
            theme={card.theme}
          />
          <CommentsQuantity commentsNumber={card.comments.length} />
        </CardContent>
      </CardWrap>
      {cardModalShow ? (
        <CardModal
          chapterName={chapterName}
          card={card}
          cardModalShow={cardModalShow}
          controlCardModal={controlCardModal}
          chapterIndex={chapterIndex}
          cardIndex={cardIndex}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;

const CardWrap = styled.div`
  padding: 10px;
  border-radius: 3px;
  background: #9197a1;
  cursor: pointer;
  margin-bottom: 7px;
`;

const CardContent = styled.div``;
