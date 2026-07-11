import reactLogo from "../resources/react.svg";
import plantCover from "../resources/MyPlantBuddyCover.webp";
import portfolioCover from "../resources/PortfolioCover.webp";

import myMediaCover from "../resources/ComingSoonCover.webp";



export const projects = [
  {
    id: "booksapi",
    title: "Books API",
    description: "A full stack Books Manager built with ASP.NET Core and SQLite. Add, edit and delete books live",
    github: "https://github.com/Faja190/BooksApi",
    altcover: "Click on card for live demo!"
  },
  {
    id: "portfolio",
    title: "My Portfolio Website",
    description: "My portfolio website built with ReactJS.",
    github: "https://github.com/Faja190/faja",
    images: [reactLogo, reactLogo],
    cover: [portfolioCover]
  },
  {
    id: "myplantbuddy",
    title: "My Plant Buddy",
    description: "A website that helps with taking care of plants.",
    github: "https://github.com/flakypanda/comp-4020-g9",
    images: [reactLogo, reactLogo],
    cover: [plantCover]
  },
  {
    id: "mymedialist",
    title: "My Media List",
    description: "An Android app thta helps you keep track of multimedia you consume.",
    github: "https://github.com/",
    images: [reactLogo],
    cover: [myMediaCover]
  }
];
