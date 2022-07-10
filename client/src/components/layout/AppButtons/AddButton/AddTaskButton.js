import React, { useState, useEffect, useRef } from "react";
import { BsPlus } from "react-icons/bs";
import TaskInput from "../../AppInputs/TaskInput";

const AddTaskButton = props => {
  const [activeInput, setActiveInput] = useState(false);
  const taskInputRef = useRef(null);

  useEffect(() => {
    if (props.setTaskInputHeight) {
      if (activeInput) {
        props.setTaskInputHeight(taskInputRef.current.scrollHeight);
      } else {
        props.setTaskInputHeight(0);
      }
    }
  }, [activeInput]);

  function handleOnClickBtn() {
    if (props.setActiveAddTask) {
      props.setActiveAddTask(true);
    }

    setActiveInput(true);
  }

  function handleCancelBtn() {
    if (props.setActiveAddTask) {
      props.setActiveAddTask(false);
    }

    setActiveInput(false);
  }

  return (
    <div className="app__btn_wrapper add__btn add_task__btn">
      {!activeInput && !props.activeAddTask && (
        <div className="add__btn_wrapper" onClick={() => handleOnClickBtn()}>
          <div className="btn__icon">
            <BsPlus className="icon" />
          </div>
          <div className="btn__name">Add {props.btnName}</div>
        </div>
      )}

      {activeInput && (
        <TaskInput 
          sectionId={props.sectionId} 
          dueDate={props.dueDate} 
          handleCancelBtn={handleCancelBtn} 
          ref={taskInputRef} />
      )}
    </div>
  );
};

export default AddTaskButton;
