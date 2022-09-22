import { useState } from "react";
import styled from "styled-components";
import RenameTitleModal from "./components/RenameTitleModal";
interface HeaderProps {
  title: string;
  chapterIndex: number;
}
const ChapterHeader = ({ chapterIndex, title }: HeaderProps) => {
  const [renameModalShow, setRenameModalShow] = useState(false);
  const controlRenameModal = (flag: boolean) => {
    setRenameModalShow(flag);
  };
  return (
    <Title>
      <p
        onClick={() => {
          controlRenameModal(true);
        }}
      >
        {title}
      </p>
      {renameModalShow ? (
        <RenameTitleModal
          chapterIndex={chapterIndex}
          controlRenameModal={controlRenameModal}
        />
      ) : (
        <></>
      )}
    </Title>
  );
};

export default ChapterHeader;

const Title = styled.div`
  margin-bottom: 10px;
  & p {
    cursor: pointer;
  }
`;
