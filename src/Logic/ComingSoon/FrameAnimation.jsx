import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "../../Styles/FrameAnimation.css";

import Frame1 from "../../resources/Frame1.svg";
import Frame2 from "../../resources/Frame2.svg";
import Frame3 from "../../resources/Frame3.svg";
import Frame4 from "../../resources/Frame4.svg";

const frames = [Frame1, Frame2, Frame3, Frame4];


export default function FrameAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, 400); //400ms per frame
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.img
      key={index} 
      src={frames[index]}
      alt={`frame-${index}`}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="image" 
    />
  );
}