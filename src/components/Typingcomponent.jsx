import React, { useRef, useState, useEffect } from 'react';

export default function TypingComponent() {
  const generateCodeSnippets = () => {
    return [
      `const add = (a, b) => a + b;`,
      `function greet(name) { return "Hello, " + name; }`,
      `const arr = [1, 2, 3, 4, 5];`,
      `for (let i = 0; i < 10; i++) { console.log(i); }`,
      `if (x > 10) { console.log("Greater than 10"); } else { console.log("Less or equal to 10"); }`
    ];
  };

  const [currentSnippet, setCurrentSnippet] = useState('');
  const [currentText, setCurrentText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    let csp = generateCodeSnippets();
    setCurrentSnippet(csp[Math.floor(Math.random() * csp.length)]);
    inputRef.current.focus();
  }, []);

  const highlightText = () => {
    let text = '';
    for (let i = 0; i < currentText.length; i++) {
      if (currentText[i] === currentSnippet[i]) {
        text += `<span style="color: green;">${currentText[i]}</span>`;
      } else {
        text += `<span style="color: red;">${currentText[i]}</span>`;
      }
    }
    return text;
  };

  const displaySnippet = () => {
    let snippet = '';
    for (let i = 0; i < currentSnippet.length; i++) {
      snippet += `<span>${currentSnippet[i]}</span>`;
    }
    return snippet;
  };

  const handleChange = (event) => {
    setCurrentText(event.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ position: 'relative', width: '50vw', height: '50vh' }}>
        <div
          dangerouslySetInnerHTML={{ __html: displaySnippet() }}
          style={{
            whiteSpace: 'pre-wrap',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            padding: '10px',
            border: '3px solid black',
            overflow: 'hidden'
          }}
        />
        <textarea
          ref={inputRef}
          value={currentText}
          onChange={handleChange}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            height: '100%',
            width: '100%',
            padding: '10px',
            fontFamily: 'monospace',
            fontSize: '16px',
            color: 'transparent',
            caretColor: 'black',
            resize: 'none',
            outline: 'none' // Remove default focus outline
          }}
        />
        <div
          dangerouslySetInnerHTML={{ __html: highlightText() }}
          style={{
            whiteSpace: 'pre-wrap',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            padding: '10px',
            border: '3px solid black',
            overflow: 'hidden',
            pointerEvents: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
          }}
        />
      </div>
    </div>
  );
}
