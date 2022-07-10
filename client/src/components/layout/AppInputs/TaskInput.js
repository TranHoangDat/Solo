import React, { useState, useRef, useEffect, useContext, forwardRef } from "react";
import useWindowSize from "@hooks/useWindowSize";
import TextArea from "./TextArea";
import LabelButton from "../AppButtons/ContentButton/LabelButton";
import PriorityButton from "../AppButtons/ContentButton/PriorityButton";
import ReminderButton from "../AppButtons/ContentButton/ReminderButton";
import CommentButton from "../AppButtons/ContentButton/CommentButton";
import FullScheduleButton from "../AppButtons/TaskButton/ScheduleButton";
import FullSelectProjectButton from "../AppButtons/TaskButton/SelectProjectButton";
import AddButton from "../AppButtons/CtaButton/AddButton";
import CancelButton from "../AppButtons/CtaButton/CancelButton";
import "./AppInput.scss";
import {TaskContext} from "../../../contexts/TaskContext";
import { useAlert } from 'react-alert';

const TaskInput = (props, ref) => {
  //Props
  const {sectionId} = props;
  //Context
  const {addTask} = useContext(TaskContext);

  const alert = useAlert();
  const [clickLoading, setClickLoading] = useState(false);
  const [dueDate, setDueDate] = useState(null);

  const onSubmitTask = async () => {
    setClickLoading(true);
    try{
      const newTask = {
        content: taskContent,
        dueDate: props.dueDate,
      }

      const response = await addTask(sectionId, newTask);
      if(response.success) {
        setTaskContent("");
        props.handleCancelBtn();
      }
      else {
        alert.show(response.message, {
          type: 'error'
        });
      }
    }
    catch(err) {
      console.log(err.message);
    }
    setClickLoading(false);
  } 

  const taskButtonsRef = useRef(null);
  const [focusInputBox, setFocusInputBox] = useState(false);
  const [activeFlexWrap, setActiveFlexWrap] = useState(false);
  const [taskButtonsHeight, setTaskButtonsHeight] = useState(0);
  const [windowWidth, windowHeight] = useWindowSize();
  const [taskContent, setTaskContent] = useState("");

  useEffect(() => {
    let curTBHeight = taskButtonsRef.current.clientHeight;

    if (curTBHeight !== taskButtonsHeight) {
      if (curTBHeight < taskButtonsHeight) {
        setActiveFlexWrap(true);
      } else {
        setActiveFlexWrap(false);
      }

      setTaskButtonsHeight(curTBHeight);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (taskButtonsRef.current.clientHeight < 50) {
      setActiveFlexWrap(true);
    } else {
      setActiveFlexWrap(false);
    }

    setTaskButtonsHeight(taskButtonsRef.current.clientHeight);
  }, []);

  return (
    <div className="task__input" ref={ref}>
      <div
        className={
          focusInputBox
            ? "input__box task__input_wrapper focus"
            : "input__box task__input_wrapper"
        }
      >
        <TextArea
          content={taskContent}
          setContent={setTaskContent}
          setFocusInputBox={setFocusInputBox}
          initialHeight={23.5}
          lineHeight={"1.5"}
          maxHeight={205}
        />
        <div
          className={
            activeFlexWrap
              ? "task__buttons_container flex__wrap"
              : "task__buttons_container"
          }
          ref={taskButtonsRef}
        >
          <div className="task__buttons_wrapper">
            <FullScheduleButton />
            <FullSelectProjectButton />
          </div>
          <div className="task__buttons_wrapper">
            <LabelButton />
            <PriorityButton />
            <ReminderButton />
            <CommentButton />
          </div>
        </div>
      </div>
      <div className="input__buttons_wrapper">
        <AddButton 
          btnName={"Add task"}
          clickLoading={clickLoading}
          available={taskContent === "" ? false : true}
          handleOnClick={onSubmitTask} />
        <CancelButton handleOnClick={props.handleCancelBtn} />
      </div>
    </div>
  );
};

export default forwardRef(TaskInput);
