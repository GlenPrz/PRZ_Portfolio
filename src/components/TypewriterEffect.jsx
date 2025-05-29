import React, { useState, useEffect } from "react";

const TypewriterEffect = ({
  textArray,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 2000,
  startDelay = 1000,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(typingSpeed);
  const [shouldStartTyping, setShouldStartTyping] = useState(false);

  useEffect(() => {
    // Delay at the beginning of each iteration
    setShouldStartTyping(false);
    const startTimer = setTimeout(() => {
      setShouldStartTyping(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [loopNum, startDelay]);

  useEffect(() => {
    if (!shouldStartTyping) return;

    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setSpeed(isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    loopNum,
    textArray,
    typingSpeed,
    deletingSpeed,
    delay,
    speed,
    shouldStartTyping,
  ]);

  return (
    <h1 className="typewriter">
      <span>{text}</span>
      <span className="cursor">|</span>
    </h1>
  );
};

export default TypewriterEffect;
