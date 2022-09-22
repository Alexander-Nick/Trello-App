import { createSlice } from "@reduxjs/toolkit";
import initialState from "./state";
const slice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    changeUserName(state, action) {
      state.name = action.payload;
    },
    changeChapterName(state, action) {
      state.chapters[action.payload.chapterIndex].title =
        action.payload.newTitle;
    },
    deleteCard(state, action) {
      const newCards = state.chapters[action.payload.chapterIndex].cards;
      newCards.splice(action.payload.cardIndex, 1);
    },
    changeCardName(state, action) {
      state.chapters[action.payload.chapterIndex].cards[
        action.payload.cardIndex
      ].theme = action.payload.newName;
    },
    changeCardDescription(state, action) {
      state.chapters[action.payload.chapterIndex].cards[
        action.payload.cardIndex
      ].description = action.payload.newDescription;
    },
    editComment(state, action) {
      const payload = action.payload;
      const address = payload.address;
      state.chapters[address.chapterIndex].cards[address.cardIndex].comments[
        address.commentIndex
      ].content = payload.newComment;
    },
    addComment(state, action) {
      state.chapters[action.payload.chapterIndex].cards[
        action.payload.cardIndex
      ].comments.push(action.payload.newComment);
    },
    deleteComment(state, action) {
      const address = action.payload.address;
      const newComments =
        state.chapters[address.chapterIndex].cards[address.cardIndex].comments;
      newComments.splice(address.commentIndex, 1);
    },
    addCard(state, action) {
      state.chapters[action.payload.chapterIndex].cards.push(
        action.payload.newCard
      );
    },
  },
});

export default slice.reducer;
export const {
  changeUserName,
  changeChapterName,
  deleteCard,
  deleteComment,
  changeCardName,
  changeCardDescription,
  editComment,
  addComment,
  addCard,
} = slice.actions;
