import React, { useState, useRef, useEffect } from "react";

const TextArea = props => {
  const textAreaRef = useRef(null);
  const shadowTextAreaRef = useRef(null);
  const firstLineHeight = 25;

  useEffect(() => {
    textAreaRef.current.style.height = props.initialHeight + "px";
    textAreaRef.current.style.lineHeight = props.lineHeight;
    shadowTextAreaRef.current.style.lineHeight = props.lineHeight;
  }, []);

  useEffect(() => {
    shadowTextAreaRef.current.value = props.content;
    const scrollHeight = shadowTextAreaRef.current.scrollHeight;

    if (scrollHeight != textAreaRef.current.style.height) {
      if (scrollHeight > firstLineHeight) {
        if (scrollHeight < props.maxHeight) {
          if (scrollHeight > props.initialHeight) {
            textAreaRef.current.style.height = scrollHeight + "px";
          } else {
            textAreaRef.current.style.height = props.initialHeight + "px";
          }
        } else {
          textAreaRef.current.style.height = props.maxHeight + "px";
        }
      } else {
        textAreaRef.current.style.height = props.initialHeight + "px";
      }
    }

    return null;
  }, [props.content]);

  return (
    <div className="textarea__wrapper">
      <textarea
        type="text"
        placeholder="e.g"
        ref={textAreaRef}
        className="input__textarea"
        onChange={e => props.setContent(e.currentTarget.value)}
        onFocus={() => props.setFocusInputBox(true)}
        onBlur={() => props.setFocusInputBox(false)}
        value ={props.content}
        autoFocus
      ></textarea>
      <textarea className="shadow__textarea" ref={shadowTextAreaRef}></textarea>
    </div>
  );
};

export default TextArea;
