import styled from "styled-components";
import { Chapter } from "./components/Chapter";
import { Header } from "./components/Header";
import ModalAskName from "./components/ModalAskName/ModalAskName";
import {
  selectChapters,
  selectName,
  useAppSelector,
} from "./store/boardStore/selectors";

function App() {
  const name = useAppSelector(selectName);
  const chaptersState = useAppSelector(selectChapters);
  const chapters = chaptersState.map((chapter, index) => (
    <Chapter chapter={chapter} chapterIndex={index} />
  ));
  //!!! all modals in app?
  return (
    <>
      <Header />
      {!!name ? <ChaptersWrap>{chapters}</ChaptersWrap> : <ModalAskName />}
    </>
  );
}

export default App;

const ChaptersWrap = styled.div`
  display: flex;
  margin: 10px;
`;
