import React, { useState, useRef, useEffect } from "react";
import useWindowSize from "@hooks/useWindowSize.js";
import { useModal, useModalUpdate } from "@contexts/ModalContext";
import { BsX } from "react-icons/bs";
import SubtaskTabContent from "../TabsContent/SubtaskTabContent";
import CommentTabContent from "../TabsContent/CommentTabContent";
import ActivityTabContent from "../TabsContent/ActivityTabContent";
import LabelButton from "../AppButtons/ContentButton/LabelButton";
import PriorityButton from "../AppButtons/ContentButton/PriorityButton";
import ReminderButton from "../AppButtons/ContentButton/ReminderButton";
import TaskActionButton from "../AppButtons/ContentButton/TaskActionButton";
import TaskContent from "../ProjectTask/TaskContent";
import ScheduleButton from "../AppButtons/ContentButton/ScheduleButton";
import FullScheduleButton from "../AppButtons/TaskButton/ScheduleButton";
import SelectProjectButton from "../AppButtons/ContentButton/SelectProjectButton";
import FullSelectProjectButton from "../AppButtons/TaskButton/SelectProjectButton";
import "./TaskModal.scss";

const TaskModal = props => {
  const { ModalTypes, modal } = useModal();
  const handleActiveModal = useModalUpdate();

  const Tab = {
    SUBTASK: 0,
    COMMENT: 1,
    ACTIVITY: 2,
  };

  const taskModalRef = useRef(null);
  const modalHeaderRef = useRef(null);
  const tabsWrapperRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [tabContentHeight, setTabContentHeight] = useState(0);
  const [windowWidth, windowHeight] = useWindowSize();

  function calcTabContentHeight() {
    const headerHeight = windowWidth < 1057 ? 44 : 48;
    const taskModalHeight = windowHeight - headerHeight;
    const modalHeaderHeight = modalHeaderRef.current.scrollHeight;
    const tabsWrapperHeight = tabsWrapperRef.current.scrollHeight;
    return taskModalHeight - modalHeaderHeight - tabsWrapperHeight;
  }

  useEffect(() => {
    setTabContentHeight(calcTabContentHeight());
  }, [props.taskContent]);

  useEffect(() => {
    setTabContentHeight(calcTabContentHeight());
  }, [windowHeight]);

  return (
    <div
      className={
        modal === ModalTypes.TASK
          ? "project__modal modal active"
          : "project__modal modal"
      }
      id="task__modal"
      ref={taskModalRef}
    >
      <div className="modal__header" ref={modalHeaderRef}>
        <div className="modal__wrapper">
          <div className="project__name_wrapper">
            <div className="project__name project__color charcoal">Welcome</div>
            <div
              className="modal__btn"
              onClick={() => handleActiveModal(ModalTypes.NONE)}
            >
              <BsX className="icon" />
            </div>
          </div>
        </div>
        <div className="modal__wrapper">
          <TaskContent taskContent={props.taskContent} />
          <div className="modal__buttons_container">
            <div className="modal__buttons_wrapper">
              <FullScheduleButton />
              <FullSelectProjectButton />
            </div>
            <div className="modal__buttons_wrapper">
              <SelectProjectButton />
              <LabelButton />
              <PriorityButton />
              <ReminderButton />
              <TaskActionButton listView={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="modal__body">
        <div className="modal__wrapper" ref={tabsWrapperRef}>
          <div className="modal__tabs_wrapper">
            <div
              className={
                activeTab === Tab.SUBTASK ? "modal__tab active" : "modal__tab"
              }
              onClick={() => setActiveTab(Tab.SUBTASK)}
            >
              Sub-tasks
              <span className="quantity">1</span>
            </div>
            <div
              className={
                activeTab === Tab.COMMENT ? "modal__tab active" : "modal__tab"
              }
              onClick={() => setActiveTab(Tab.COMMENT)}
            >
              Comments
              <span className="quantity">1</span>
            </div>
            <div
              className={
                activeTab === Tab.ACTIVITY ? "modal__tab active" : "modal__tab"
              }
              onClick={() => setActiveTab(Tab.ACTIVITY)}
            >
              Activity
            </div>
          </div>
        </div>
        <div className="modal__wrapper">
          {activeTab === Tab.SUBTASK && (
            <SubtaskTabContent height={tabContentHeight} />
          )}
          {activeTab === Tab.COMMENT && (
            <CommentTabContent height={tabContentHeight} />
          )}
          {activeTab === Tab.ACTIVITY && (
            <ActivityTabContent height={tabContentHeight} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
