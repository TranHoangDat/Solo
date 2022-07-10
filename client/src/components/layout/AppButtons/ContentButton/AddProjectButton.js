import React, { useState, useEffect } from "react";
import { useModal, useModalUpdate } from "@contexts/ModalContext";
import { BiPlus } from "react-icons/bi";

const AddProjectButton = (props) => {
  const { ModalTypes, modal } = useModal();
  const handleActiveModal = useModalUpdate();
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (props.sidebarBtn) {
      setClassName(
        "app__btn_wrapper content__btn add_project__btn sidebar__btn"
      );
    } else {
      setClassName("app__btn_wrapper content__btn add_project__btn");
    }
  }, []);

  return (
    <div className={className}>
      <div
        className="btn__name_wrapper"
        onClick={() => handleActiveModal(ModalTypes.ADD_PROJECT)}
      >
        <div className="btn__icon">
          <BiPlus className="icon" />
        </div>
      </div>
    </div>
  );
};

export default AddProjectButton;
