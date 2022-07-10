import React, { useState, useRef, useEffect } from "react";
import AddTaskButton from "../AppButtons/AddButton/AddTaskButton";
import TaskInput from "../AppInputs/TaskInput";
import ProjectTask from "../ProjectTask/ProjectTask";
import "./SubtaskTabContent.scss";

const SubtaskTabContent = props => {
  const subtaskContentRef = useRef(null);
  const [subtaskOffset, setSubtaskOffset] = useState(
    window.innerWidth < 751 ? 37 : 42
  );

  useEffect(() => {
    const updateSubtaskOffset = () => {
      let offset = 0;

      if (window.innerWidth < 751) {
        offset = 37;
      } else {
        offset = 42;
      }

      setSubtaskOffset(offset);
    };

    window.addEventListener("resize", updateSubtaskOffset);

    return () => {
      window.removeEventListener("resize", updateSubtaskOffset);
    };
  }, []);

  useEffect(() => {
    subtaskContentRef.current.style.maxHeight =
      props.height - subtaskOffset + "px";
  }, [props.height]);

  useEffect(() => {
    subtaskContentRef.current.style.maxHeight =
      props.height - subtaskOffset + "px";
  }, [subtaskOffset]);

  return (
    <div className="subtask__tab_content" ref={subtaskContentRef}>
      <div className="task__list">
        <ProjectTask listView={true} taskProp={{id: 'test', content: 'subTask'}} provided={{}}/>
      </div>
      <div className="tab__content_footer">
        <AddTaskButton btnName={"sub-task"} />
      </div>
    </div>
  );
};

export default SubtaskTabContent;
