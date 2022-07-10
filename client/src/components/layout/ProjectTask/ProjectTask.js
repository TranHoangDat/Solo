import React, { useState, useEffect, useRef, useContext } from "react";
import TaskContent from "./TaskContent";
import DropdownButton from "../AppButtons/ContentButton/DropdownButton";
import TaskInformation from "./TaskInformation";
import "./ProjectTask.scss";
import TaskButton from "./TaskButton";
import { TaskContext } from "../../../contexts/TaskContext";

const ProjectTask = props => {
  const [open, setOpen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const {taskProp, index} = props;
  const {provided, innerRef} = props;
  const {updateTask} = useContext(TaskContext);
  
  const toggleTypeOfTask = async () => {
    await updateTask(taskProp.sectionId, {
      id: taskProp.id,
      type: completed? 'INCOMPLETED' : 'COMPLETED',
    });
    setCompleted(!completed);
  }

  useEffect(()=>{
    setCompleted(taskProp.type==='COMPLETED')
  }, []);

  return (
    <div
      className={props.listView ? "project__task list__view" : "project__task"}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={innerRef}
    >
      {props.listView && props.children ? (
        <DropdownButton open={open} setOpen={setOpen} />
      ) : undefined}
      <div
        className={
          completed
            ? "task__specification_wrapper completed"
            : "task__specification_wrapper"
        }
      >
        <TaskContent 
          taskContent={taskProp.content} 
          markCompleted={toggleTypeOfTask} 
          completed={completed} />
        <TaskInformation task={taskProp}/>
        <TaskButton task={taskProp} listView={props.listView} completed={completed} />
      </div>

      {props.listView && (
        <div className={open ? "subtask__list opened" : "subtask__list"}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default ProjectTask;
