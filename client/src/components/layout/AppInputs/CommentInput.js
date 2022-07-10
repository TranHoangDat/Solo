import React, { forwardRef, useState } from "react";
import AttachFileButton from "../AppButtons/ContentButton/AttachFileButton";
import EmotionButton from "../AppButtons/ContentButton/EmotionButton";
import RecordButton from "../AppButtons/ContentButton/RecordButton";
import AddButton from "../AppButtons/CtaButton/AddButton";
import TextArea from "./TextArea";

const CommentInput = (props, ref) => {
  const [focusInputBox, setFocusInputBox] = useState(false);
  const [commentContent, setCommentContent] = useState("");

  return (
    <div
      className={
        focusInputBox
          ? "input__box focus comment__input_wrapper"
          : "input__box comment__input_wrapper"
      }
      ref={ref}
    >
      <TextArea
        content={commentContent}
        setContent={setCommentContent}
        setFocusInputBox={setFocusInputBox}
        type={"comment"}
        initialHeight={56}
        lineHeight={"1.5"}
        maxHeight={174}
      />
      <div className="input__buttons_wrapper">
        <AttachFileButton />
        <RecordButton />
        <EmotionButton />
        <div className="input__btn">
          <AddButton btnName={"Add Comment"} available={true} />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(CommentInput);
