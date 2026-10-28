import { useEffect, useState } from 'react'

import { animatedSubtitle } from '@data'

const SubtitleAnimation = () => {
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopIndex, setLoopIndex] = useState<number>(0);
  const [typingSpeed, setTypingSpeed] = useState<number>(100);
  const [reduced, setReduced] = useState<boolean>(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reduced) return;

    // Array.from separa por caracteres reales, sin partir tildes ni símbolos
    const current: string[] = Array.from(animatedSubtitle[loopIndex % animatedSubtitle.length]);
    const typed = Array.from(text);

    const handleTyping = () => {
      if (isDeleting) {
        setText(typed.slice(0, -1).join(''));
        setTypingSpeed(50);
      } else {
        setText(current.slice(0, typed.length + 1).join(''));
        setTypingSpeed(100);
      }

      if (!isDeleting && typed.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopIndex, reduced]);

  return (
    <p className="sign-line">
      <span className="sr-only">Vos elegís {animatedSubtitle[0]}</span>
      <span aria-hidden="true">
        Vos elegís <span className="sign-pick">{reduced ? animatedSubtitle[0] : text}</span>
        {!reduced && <span className="cursor-blink" />}
      </span>
    </p>
  )
}

export default SubtitleAnimation
