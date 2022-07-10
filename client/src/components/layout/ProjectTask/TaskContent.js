import React from "react";

const TaskContent = props => {
  return (
    <div className="task__content_wrapper">
      <label className="task__checkbox" onClick={()=>props.markCompleted()}>
        <input type="checkbox" checked={props.completed}/>
        <span className="task__checkmark"></span>
      </label>
      <div className="task__content">{props.taskContent}</div>
    </div>
  );
};

export default TaskContent;
