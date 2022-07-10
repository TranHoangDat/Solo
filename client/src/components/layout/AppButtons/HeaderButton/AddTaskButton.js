import React from "react";
import { useModal, useModalUpdate } from "@contexts/ModalContext";
import AddTaskIcon from "../../Icons/AddTaskIcon";
import "./HeaderButton.scss";

const AddTaskButton = () => {
  const { ModalTypes, modal } = useModal();
  const handleActiveModal = useModalUpdate();

  return (
    <div className="header__btn_wrapper">
      <div
        className="header__btn"
        onClick={() => handleActiveModal(ModalTypes.ADD_TASK)}
      >
        <AddTaskIcon width={24} />
      </div>
    </div>
  );
};

export default AddTaskButton;
