'use client';

import { useEffect, useState, useCallback } from 'react';

interface TypewriterTextProps {
  initialText: string;
  finalText: string;
  className?: string;
}

export default function TypewriterText({ 
  initialText, 
  finalText, 
  className = '' 
}: TypewriterTextProps) {
  const [currentText, setCurrentText] = useState(initialText);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const typeText = useCallback(() => {
    let text = '';
    const typeInterval = setInterval(() => {
      if (text.length < finalText.length) {
        text = finalText.slice(0, text.length + 1);
        setCurrentText(text);
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 150); // Type one letter every 150ms
  }, [finalText]);

  const deleteText = useCallback(() => {
    let text = initialText;
    const deleteInterval = setInterval(() => {
      if (text.length > 0) {
        text = text.slice(0, -1);
        setCurrentText(text);
      } else {
        clearInterval(deleteInterval);
        setIsDeleting(false);
        // Start typing new text
        setTimeout(() => {
          setIsTyping(true);
          typeText();
        }, 500); // Brief pause before typing
      }
    }, 150); // Delete one letter every 150ms
  }, [initialText, typeText]);

  useEffect(() => {
    // Start the animation after a delay
    const timer = setTimeout(() => {
      // Start deleting letter by letter
      setIsDeleting(true);
      deleteText();
    }, 2000); // Show initial text for 2 seconds

    return () => clearTimeout(timer);
  }, [initialText, finalText, deleteText]);

  return (
    <span className={`typewriter-container ${className}`}>
      <span 
        className={`typewriter-text ${isDeleting || isTyping ? 'typing' : ''}`}
        data-text={currentText}
      >
        {currentText}
      </span>
    </span>
  );
}
