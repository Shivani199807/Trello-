import { randomId } from "./utils";

const getCard = (content) => ({
  id: randomId(),
  content,
});
export default [
  {
    id: randomId(),
    name: "Backlog",
    cards: [
      getCard({
        cardTitle: "Ingregrate frontend with backend",
        cardDetails: "Do the whole setup",
      }),
    ],
  },
  {
    id: randomId(),
    name: "Ready",
    cards: [],
  },
  {
    id: randomId(),
    name: "In Progress",
    cards: [],
  },
  {
    id: randomId(),
    name: "Done",
    cards: [],
  },
];
