import styled from "styled-components";
import NewCardForm from "./Components/NewCardForm";
import NewCardTitle from "./Components/NewCardTitle";
interface ModalProps {
  chapterIndex: number;
  controlNewCardModal: (flag: boolean) => void;
}

const NewCardModal = ({ controlNewCardModal, chapterIndex }: ModalProps) => {
  return (
    <NewCardModalWrap>
      <NewCardModalContent>
        <NewCardTitle controlNewCardModal={controlNewCardModal} />
        <NewCardForm
          controlNewCardModal={controlNewCardModal}
          chapterIndex={chapterIndex}
        />
      </NewCardModalContent>
    </NewCardModalWrap>
  );
};
export default NewCardModal;
const NewCardModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 275px;
  z-index: 3;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 3px;
  background-color: #c9c9c9;
`;

const NewCardModalWrap = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #13131368;
  z-index: 2;
`;
