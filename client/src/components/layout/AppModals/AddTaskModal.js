import React, {useContext} from "react";
import { BsX } from "react-icons/bs";
import { useModal, useModalUpdate } from "@contexts/ModalContext";
import TaskInput from "../AppInputs/TaskInput";
import "./AddTaskModal.scss";
import {ProjectContext} from '../../../contexts/ProjectContext';

const AddTaskModal = () => {
  const { ModalTypes, modal } = useModal();
  const handleActiveModal = useModalUpdate();

  const {projectState: {projects}} = useContext(ProjectContext);

  const inboxProject = projects.find(project => (project.name==='Inbox' && project.type==='DEFAULT'));

  return (
    <div
      className={
        modal === ModalTypes.ADD_TASK
          ? "modal app__modal active"
          : "modal app__modal"
      }
      id="add_task__modal"
    >
      <div className="modal__body">
        <div className="modal__wrapper">
          <div className="modal__label">
            Quick Add Task
            <BsX
              className="icon"
              onClick={() => handleActiveModal(ModalTypes.NONE)}
            />
          </div>
          {!inboxProject && <>Loading</>}
          {inboxProject && 
          <TaskInput
            sectionId={inboxProject.id}
            handleCancelBtn={() => handleActiveModal(ModalTypes.NONE)}/>}
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
