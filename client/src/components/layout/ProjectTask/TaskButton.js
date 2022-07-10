import React, { useState } from "react";
import EditButton from "../AppButtons/ContentButton/EditButton";
import CommentButton from "../AppButtons/ContentButton/CommentButton";
import ScheduleButton from "../AppButtons/ContentButton/ScheduleButton";
import TaskActionButton from "../AppButtons/ContentButton/TaskActionButton";

const TaskButton = props => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={
        focus ? "task__buttons_wrapper focus" : "task__buttons_wrapper"
      }
    >
      {props.listView && !props.completed && <EditButton />}
      {props.listView && !props.completed && <ScheduleButton />}
      {props.listView && !props.completed && <CommentButton />}
      <TaskActionButton
        task={props.task}
        focus={focus}
        setFocus={setFocus}
        listView={props.listView}
        completed={props.completed}
      />
    </div>
  );
};

export default TaskButton;
