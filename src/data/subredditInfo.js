import askReddit from "../assets/askReddit.png";
import AITA from "../assets/AITA.png";
import til from "../assets/todayilearned.png";
import memes from "../assets/memes.png";
import proghum from "../assets/programmerhumor.png";
import salsa from "../assets/salsa.png";
import gaming from "../assets/gaming.png";
import piano from "../assets/piano.png";
import askUk from "../assets/askUk.png";
import cats from "../assets/cats.png";
import mildlyInteresting from "../assets/mildlyInteresting.png";
import madeMeSmile from "../assets/madeMeSmile.png";
import unresolvedMysteries from "../assets/unresolvedMysteries.png";
import books from "../assets/books.png";
import iAmA from "../assets/iAmA.png";

export const subreddits = [
  {
    name: "AmItheAsshole",
    img: AITA,
    endpoint: "AmItheAsshole/",
  },
  {
    name: "AskReddit",
    img: askReddit,
    endpoint: "AskReddit/",
  },
  { name: "AskUk", img: askUk, endpoint: "AskUk/" },
  { name: "books", img: books, endpoint: "books/" },
  { name: "cats", img: cats, endpoint: "cats/" },
  {
    name: "gaming",
    img: gaming,
    endpoint: "gaming/",
  },
  { name: "IAmA", img: iAmA, endpoint: "iama/" },
  { name: "MadeMeSmile", img: madeMeSmile, endpoint: "mademesmile/" },
  { name: "memes", img: memes, endpoint: "memes" },
  {
    name: "mildlyinteresting",
    img: mildlyInteresting,
    endpoint: "mildlyinteresting/",
  },
  { name: "piano", img: piano, endpoint: "piano/" },
  {
    name: "ProgrammerHumor",
    img: proghum,
    endpoint: "ProgrammerHumor",
  },
  { name: "Salsa", img: salsa, endpoint: "Salsa/" },
  {
    name: "todayilearned",
    img: til,
    endpoint: "todayilearned/",
  },

  {
    name: "UnresolvedMysteries",
    img: unresolvedMysteries,
    endpoint: "unresolvedmysteries/",
  },
];
