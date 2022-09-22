import { useState } from "react";
import styled from "styled-components";
import { changeChapterName } from "../../../../../store/boardStore/reducers";
import { useAppDispatch } from "../../../../../store/boardStore/selectors";
interface ModalProps {
  controlRenameModal: (b: boolean) => void;
  chapterIndex: number;
}
const RenameTitleModal = ({ controlRenameModal, chapterIndex }: ModalProps) => {
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useAppDispatch();
  const changeClicked = () => {
    dispatch(changeChapterName({ chapterIndex, newTitle }));
    controlRenameModal(false);
    setNewTitle("");
  };
  const checkIfEnter = (event: React.KeyboardEvent) => {
    if (event.code === "Enter") {
      changeClicked();
    }
  };
  return (
    <LockApp>
      <ModalWrap>
        <Title>
          <h3>Rename Chapter</h3>
          <button
            onClick={() => {
              controlRenameModal(false);
            }}
          >
            X
          </button>
        </Title>
        <RenameInput
          onKeyPress={checkIfEnter}
          value={newTitle}
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
          placeholder="New Chapter's Name"
        />
        <Button onClick={changeClicked}>Change</Button>
      </ModalWrap>
    </LockApp>
  );
};

export default RenameTitleModal;

const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  border-radius: 3px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  overflow: hidden;
  background-color: #c9c9c9;
  z-index: 3;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  & h3 {
    font-weight: 600;
    font-size: 18px;
  }
`;
const RenameInput = styled.input`
  width: 90%;
  padding: 3px;
  display: block;
  border-radius: 3px;
  margin: 10px auto;
`;
const Button = styled.button`
  margin: 0 10px 10px;
`;
const LockApp = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 50%;
  background-color: #13131368;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, -50%);
`;
