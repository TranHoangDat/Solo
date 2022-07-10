import React from "react";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { BsChatSquare } from "react-icons/bs";
import ScheduleIcon from "../Icons/ScheduleIcon";
import SingleProjectIcon from "../Icons/SingleProjectIcon";

const TaskInformation = (props) => {
  return (
    <div className="task__information_wrapper">
      <div className="subtask__information task__information">
        <AiOutlineNodeIndex className="gray__icon icon" />
        <p className="quantity">0/1</p>
      </div>
      {props.task.dueDate &&
      <div className="schedule__information task__information today__schedule">
        <ScheduleIcon width={16} />
        <p>{new Date(props.task.dueDate.slice(0,10)).toString().slice(4,10)}</p>
      </div>}
      <div className="comment__information task__information">
        <BsChatSquare className="gray__icon icon" />
        {/* <p className="quantity">1</p> */}
      </div>
      {/* <div className="project__information task__information">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <SingleProjectIcon width={12} />
      </div> */}
    </div>
  );
};

export default TaskInformation;
