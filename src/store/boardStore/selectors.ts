import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, BoardType } from ".";

export const selectName = (state: BoardType) => state.board.name;
export const selectChapters = (state: BoardType) => state.board.chapters;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<BoardType> = useSelector;
