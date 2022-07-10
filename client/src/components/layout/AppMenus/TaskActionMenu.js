import React, { useState, useEffect, useRef, useContext } from "react";
import DeleteTaskItem from "./MenuSelectionItems/Task/DeleteTaskItem";
import CopyLinkItem from "./MenuSelectionItems/Task/CopyLinkItem";
import DuplicateTaskItem from "./MenuSelectionItems/Task/DuplicateTaskItem";
import AddTaskAboveItem from "./MenuSelectionItems/Task/AddTaskAboveItem";
import AddTaskBelowItem from "./MenuSelectionItems/Task/AddTaskBelowItem";
import EditTaskItem from "./MenuSelectionItems/Task/EditTaskItem";
import MoveTaskItem from "./MenuSelectionItems/Task/MoveTaskItem";
import ScheduleItem from "./MenuSelectionItems/Task/ScheduleItem";
import ReminderTaskItem from "./MenuSelectionItems/Task/ReminderTaskItem";
import PriorityItem from "./MenuSelectionItems/Task/PriorityItem";
import {TaskContext} from '../../../contexts/TaskContext';

const TaskActionMenu = props => {
  const menuRef = useRef(null);
  const [posStr, setPosStr] = useState("");
  const {task} = props;

  const {
    duplicateTask,
    deleteTask,
  } = useContext(TaskContext);

  useEffect(() => {
    if (props.listView) {
      if (props.pos.topLeft) {
        setPosStr("top__left");
      } else if (props.pos.leftLeft) {
        setPosStr("left__left");
      } else {
        setPosStr("bottom__left");
      }
    } else {
      menuRef.current.style.left = props.pos.leftPos + "px";

      if (props.pos.topTop) {
        setPosStr("top__top");
      } else if (props.pos.bottomBottom) {
        setPosStr("bottom__bottom");
      } else {
        setPosStr("top__bottom");
      }
    }
  }, []);

  const handleDuplicateTask = async () => {
    await duplicateTask(task.id);
    props.setActive(false);
  }

  const handleDeleteTask = async () => {
    await deleteTask(task.sectionId, task.id);
    props.setActive(false);
  }

  return (
    <div
      className={
        "app__menu_wrapper only__selection_menu task_action__menu" +
        " " +
        posStr
      }
      ref={menuRef}
    >
      {props.completed ? (
        <ul className="app__menu_list">
          <li className="app__menu_item">
            <ul className="menu__selection_list">
              <CopyLinkItem />
            </ul>
          </li>
          <li className="app__menu_item">
            <ul className="menu__selection_list">
              <DeleteTaskItem />
            </ul>
          </li>
        </ul>
      ) : (
        <ul className="app__menu_list">
          <li className="app__menu_item">
            {props.listView ? (
              <ul className="menu__selection_list">
                {/* <AddTaskAboveItem />
                <AddTaskBelowItem /> */}
                <EditTaskItem />
              </ul>
            ) : (
              <ul className="menu__selection_list">
                <EditTaskItem />
              </ul>
            )}
          </li>
          <li className="app__menu_item">
            <ul className="menu__selection_list">
              <ScheduleItem />
              <PriorityItem />
            </ul>
          </li>
          <li className="app__menu_item">
            <ul className="menu__selection_list">
              <ReminderTaskItem />
            </ul>
          </li>
          <li className="app__menu_item">
            <ul className="menu__selection_list">
              <MoveTaskItem />
              <DuplicateTaskItem handleOnClick={handleDuplicateTask} />
              <CopyLinkItem />
            </ul>
          </li>
          <li className="app__menu_item">
            <ul className="menu__selection_list">
              <DeleteTaskItem handleOnClick={handleDeleteTask}/>
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TaskActionMenu;
