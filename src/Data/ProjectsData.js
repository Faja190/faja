import reactLogo from "../resources/react.svg";
import plantCover from "../resources/MyPlantBuddyCover.webp";
import portfolioCover from "../resources/PortfolioCover.webp";

import myMediaCover from "../resources/ComingSoonCover.webp";



export const projects = [
  {
    id: "portfolio",
    title: "My Portfolio Website",
    description: "My portfolio website built with ReactJS.",
    github: "https://github.com/yourusername/portfolio",
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
