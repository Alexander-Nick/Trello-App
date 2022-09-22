import { v4 as uuidv4 } from "uuid";

const chapId = uuidv4;
const cardId = uuidv4;
const comId = uuidv4;

const initialState = {
  name: "",
  chapters: [
    {
      title: "TODO",
      id: chapId(),
      cards: [
        {
          id: cardId(),
          author: "Ivan",
          theme: "Footer",
          description: "blablabla",
          comments: [
            {
              id: comId(),
              author: "Alex",
              content: "...",
            },
          ],
        },
        {
          id: cardId(),
          author: "Ivan",
          theme: "Icons",
          description: "the second card",
          comments: [],
        },
        {
          id: cardId(),
          author: "Mary",
          theme: "Article",
          description: "the third card",
          comments: [],
        },
      ],
    },
    {
      title: "In Progress",
      id: chapId(),
      cards: [
        {
          id: cardId(),
          author: "Ivan",
          theme: "Logo",
          description: "the first card",
          comments: [
            {
              id: comId(),
              author: "John",
              content: "Almost done",
            },
          ],
        },
      ],
    },
    {
      title: "Testing",
      id: chapId(),
      cards: [
        {
          id: cardId(),
          author: "Ivan",
          theme: "smthng",
          description: "the first card",
          comments: [
            {
              id: comId(),
              author: "John",
              content: "to be continued",
            },
          ],
        },
      ],
    },
    {
      title: "Done",
      id: chapId(),
      cards: [
        {
          id: cardId(),
          author: "Ivan",
          theme: "Logo",
          description: "the first card",
          comments: [
            {
              id: comId(),
              author: "John",
              content: "Well done",
            },
          ],
        },
      ],
    },
  ],
};

export default initialState;
