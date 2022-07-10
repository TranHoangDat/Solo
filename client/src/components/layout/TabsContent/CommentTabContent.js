import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import DeleteButton from "../AppButtons/ContentButton/DeleteButton";
import EditButton from "../AppButtons/ContentButton/EditButton";
import EmotionButton from "../AppButtons/ContentButton/EmotionButton";
import CommentInput from "../AppInputs/CommentInput";
import "./CommentTabContent.scss";

const CommentTabContent = props => {
  const commentContentRef = useRef(null);
  const commentListRef = useRef(null);
  const commentInputRef = useRef(null);
  const commentInputMarginTop = 28.8;
  const [commentOffset, setCommentOffset] = useState(
    window.innerWidth < 751 ? 34 : 50
  );

  useEffect(() => {
    const updateCommentOffset = () => {
      let offset = window.innerWidth < 751 ? 34 : 50;

      setCommentOffset(offset);
    };

    window.addEventListener("resize", updateCommentOffset);

    return () => {
      window.removeEventListener("resize", updateCommentOffset);
    };
  }, []);

  function calcHeight() {
    commentContentRef.current.style.height =
      props.height - commentOffset + "px";
    commentListRef.current.style.height =
      props.height -
      commentInputRef.current.scrollHeight -
      commentOffset -
      commentInputMarginTop +
      "px";
  }

  useEffect(() => {
    calcHeight();
  }, [props.height]);

  useEffect(() => {
    calcHeight();
  }, [commentOffset]);

  return (
    <div className="comment__tab_content" ref={commentContentRef}>
      <div className="comment__list" ref={commentListRef}>
        <Comment />
        <Comment />
        <Comment />
      </div>
      <CommentInput ref={commentInputRef} />
    </div>
  );
};

const Comment = () => {
  return (
    <div className="comment">
      <div className="commentator__avatar">
        <FaUserCircle style={{ fontSize: "30px", color: "red" }} />
      </div>
      <div className="comment__content_wrapper">
        <div className="comment__content_header">
          <div className="comment__information">
            <div className="commentator__name">Dat T.</div>
            <div className="comment__date">3 Jun 20:38</div>
          </div>
          <div className="comment__buttons_wrapper">
            <EditButton />
            <DeleteButton />
            <EmotionButton />
          </div>
        </div>
        <div className="comment__content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
};

export default CommentTabContent;
