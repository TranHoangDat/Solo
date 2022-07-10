import React, { useState, useRef, useContext, useEffect} from "react";
import TaskInput from "../AppInputs/TaskInput";
import SectionInput from '../AppInputs/SectionInput';
import useWindowSize from "@hooks/useWindowSize.js";
import "./ProjectSection.scss";
import ConfigButton from "../AppButtons/ContentButton/ConfigButton";
import DropdownButton from "../AppButtons/ContentButton/DropdownButton";
import AddTaskButton from "../AppButtons/AddButton/AddTaskButton";
import {TaskContext} from '../../../contexts/TaskContext';
import { SectionContext } from "../../../contexts/SectionContext";
const ProjectSection = props => {
  const {sectionProp} = props;
  const {addTask} = useContext(TaskContext);

  const {provided, innerRef} = props;
  const [className, setClassName] = useState("");
  const taskListRef = useRef(null);
  const sectionRef = useRef(null);
  const [windowWidth, windowHeight] = useWindowSize();
  const [focusSection, setFocusSection] = useState(false);
  const [activeBorderTop, setActiveBorderTop] = useState(false);
  const [activeBorderBottom, setActiveBorderBottom] = useState(true);
  const [bottomBoundary, setBottomBoundary] = useState(0);
  const [taskInputHeight, setTaskInputHeight] = useState(0);
  const [offset, setOffset] = useState(0);
  const [taskListOffset, setTaskListOffset] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeInput, setActiveInput] = useState(false);

  function taskListOnScroll() {
    const scrollTop = taskListRef.current.scrollTop;
    switch (scrollTop) {
      case 0:
        setActiveBorderBottom(true);
        setActiveBorderTop(false);
        break;
      case bottomBoundary:
        setActiveBorderTop(true);
        setActiveBorderBottom(false);
        break;
      default:
        setActiveBorderTop(true);
        setActiveBorderBottom(true);
        break;
    }
  }

  useEffect(() => {
    setOffset(windowWidth < 1550 ? 90 : 115);
    setTaskListOffset(windowWidth < 1550 ? 20 : 30);
    taskListRef.current.style.maxHeight = props.getHeight() - offset + "px";
    setBottomBoundary(
      taskListRef.current.scrollHeight - taskListRef.current.clientHeight
    );

    if (props.upcoming) {
      setClassName("project__section list__view upcoming");
      setOpen(true);
    } else if (props.listView) {
      setClassName("project__section list__view");
    } else {
      setClassName("project__section");
    }
  }, []);

  useEffect(() => {
    taskListRef.current.style.maxHeight = props.getHeight() - offset + "px";
    setBottomBoundary(
      taskListRef.current.scrollHeight - taskListRef.current.clientHeight
    );
  }, [windowHeight]);

  useEffect(() => {
    taskListRef.current.style.maxHeight = props.getHeight() - offset + "px";
    setBottomBoundary(
      taskListRef.current.scrollHeight - taskListRef.current.clientHeight
    );
  }, [offset]);

  useEffect(() => {
    if (taskInputHeight === 0) {
      taskListRef.current.style.maxHeight = props.getHeight() - offset + "px";
    } else {
      taskListRef.current.style.maxHeight =
        props.getHeight() - offset - taskInputHeight + taskListOffset + "px";
    }
  }, [taskInputHeight]);

  useEffect(() => {
    if (windowWidth < 1550) {
      setOffset(90);
      setTaskListOffset(20);
    } else {
      setOffset(115);
      setTaskListOffset(30);
    }
  }, [windowWidth]);

  const onSubmitTask = (newTask) => {
    addTask(sectionProp.id, newTask);
  }

  return (
    <div
      className={focusSection ? `${className} focus` : `${className}`}
      ref={sectionRef}
    >
      {(!props.listView || (props.listView && sectionProp.type!=='NO_SECTION')) && 
      (
      <div
        className={`section__header ${open ? "sticky" : ""}`}
        onFocus={() => setFocusSection(true)}
        onMouseEnter={() => setFocusSection(true)}
        onMouseLeave={() => setFocusSection(false)}
      > 
        {props.listView && !props.upcoming ? (
          <DropdownButton open={open} setOpen={setOpen} />
        ) : undefined}
        <div
          className={
            props.children
              ? "section__title_wrapper active"
              : "section__title_wrapper"
          }
        >
          <p className="section__title">{sectionProp.name}</p>
          {!props.upcoming && <p className="quantity">{props.numIncompletedTasks > 0 ? props.numIncompletedTasks : ''}</p>}
        </div>
        {(!props.upcoming && sectionProp.type!=='NO_SECTION') && <ConfigButton section={sectionProp} sectionBtn={true} />}
      </div>)}
      <div className={(open || sectionProp.type==='NO_SECTION') ? "section__body opened" : "section__body"}>
        {!props.listView && (
          <div
            className={
              activeBorderTop
                ? "section__body_border section__body_border_top"
                : "section__body_border inactive"
            }
          ></div>
        )}
        <div ref={innerRef} {...provided.droppableProps}>
          <div
            className="task__list"
            ref={taskListRef}
            onScroll={() => taskListOnScroll()}
          > 
            {props.children}
          </div>
        </div>
        {!props.listView && (
          <div
            className={
              activeBorderBottom
                ? "section__body_border section__body_border_bottom"
                : "section__body_border inactive"
            }
          ></div>
        )}
      </div>
      <div className={open ? "section__footer opened" : "section__footer"}>
        {props.listView && (props.haveAddTask) && (
          <AddTaskButton
            btnName={"task"}
            setTaskInputHeight={setTaskInputHeight}
            activeAddTask={props.activeAddTask}
            setActiveAddTask={props.setActiveAddTask}
            sectionId={sectionProp.id} 
            dueDate={sectionProp.date}
          />
        )}

        {!props.listView && (
          <AddTaskButton
            btnName={"task"}
            setTaskInputHeight={setTaskInputHeight}
            sectionId={sectionProp.id} 
            dueDate={sectionProp.date}
          />
        )}
      </div> 
    </div>
  );
};

export default ProjectSection;
