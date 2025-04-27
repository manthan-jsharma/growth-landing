import { openLink } from "./methods";

const outer = {
  title1: `G'day, I'm`,
  title2: "Manthan Sharma",
  decrypTexts: [
    "A Software Engineer",
    "A Full Stack Developer",
    "I build things for the web",
    "A Graphic Designer",
    "A Web2 Developer",
    "A Traveler",
    "Holon-Ai HAckathon",
    "AI-Agent For Digital Meetings",
  ],
  desciption: `🌱 I’m learning Python and Django along with keen intrest in frontend technologies such as React and Javascript, Current aim is to publish my own animation library on NPM.
  👯 I’m also looking to collaborate on open source/commercial projects
  💬 Ask me about Software Engineering,Anime,Anthropology and Calisthenics`,
  button: {
    label: "Portfolio-Preview!",
    onClick: () => openLink("https://portfolio-1-mu-lyart.vercel.app/"),
  },
};

export default outer;
