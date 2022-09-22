import React, { useEffect } from "react";
import styled from "styled-components";
import { CardType } from "../../store/boardStore/types";
import Comments from "./components/Comments/Comments";
import NewCommentForm from "./components/NewCommentForm";
import Title from "./components/Title";
interface CardModalProps {
  cardModalShow: boolean;
  controlCardModal: (flag: boolean) => void;
  chapterIndex: number;
  cardIndex: number;
  card: CardType;
  chapterName: string;
}

const CardModal = ({
  card,
  cardModalShow,
  chapterName,
  controlCardModal,
  chapterIndex,
  cardIndex,
}: CardModalProps) => {
  useEffect(() => {
    const checkIfEsc = (event: any) => {
      if (event.code === "Escape") {
        controlCardModal(false);
      }
    };
    window.addEventListener("keydown", checkIfEsc);
    return () => {
      window.removeEventListener("keydown", checkIfEsc);
    };
  }, [cardModalShow]);

  return (
    <>
      <CardModalWrap>
        <CardModalContent>
          <Title
            chapterName={chapterName}
            chapterIndex={chapterIndex}
            card={card}
            controlCardModal={controlCardModal}
            cardIndex={cardIndex}
          />
          <Comments
            comments={card.comments}
            chapterIndex={chapterIndex}
            cardIndex={cardIndex}
          />
          <NewCommentForm chapterIndex={chapterIndex} cardIndex={cardIndex} />
        </CardModalContent>
      </CardModalWrap>
    </>
  );
};

export default CardModal;

const CardModalContent = styled.div`
  width: 550px;
  background: #cdcdcd;
  position: absolute;
  padding: 10px;
  border-radius: 3px;
  cursor: default;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;
const CardModalWrap = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 50%;
  background-color: #13131368;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, -50%);
`;
