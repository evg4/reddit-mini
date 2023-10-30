import askReddit from "../assets/askReddit.png";
import AITA from "../assets/AITA.png";
import til from "../assets/todayilearned.png";
import memes from "../assets/memes.png";
import proghum from "../assets/programmerhumor.png";
import salsa from "../assets/salsa.png";
import gaming from "../assets/gaming.png";
import piano from "../assets/piano.png";

export const subreddits = [
  {
    name: "AskReddit",
    img: askReddit,
    endpoint: "AskReddit/",
  },
  {
    name: "AmItheAsshole",
    img: AITA,
    endpoint: "AmItheAsshole/",
  },
  {
    name: "todayilearned",
    img: til,
    endpoint: "todayilearned/",
  },
  { name: "memes", img: memes, endpoint: "memes" },
  {
    name: "ProgrammerHumor",
    img: proghum,
    endpoint: "ProgrammerHumor",
  },
  { name: "Salsa", img: salsa, endpoint: "Salsa/" },
  {
    name: "gaming",
    img: gaming,
    endpoint: "gaming/",
  },
  { name: "piano", img: piano, endpoint: "piano/" },
];
