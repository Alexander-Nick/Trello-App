export interface ChaptersProps {
  name: string;
  chapters: ChapterType[];
}
export interface AddressType {
  chapterIndex: number;
  cardIndex: number;
  commentIndex: number;
}
export interface CommentType {
  id: string;
  author: string;
  content: string;
}
export interface CardType {
  id: string;
  author: string;
  theme: string;
  description: string;
  comments: CommentType[];
}
export interface ChapterType {
  title: string;
  id: string;
  cards: CardType[];
}
