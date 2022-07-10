import React from "react";
import { useModal, useModalUpdate } from "@contexts/ModalContext";
import { BsPersonPlus } from "react-icons/bs";

const ShareButton = props => {
  const { ModalTypes, modal } = useModal();
  const handleActiveModal = useModalUpdate();

  return (
    <div
      className={
        props.full
          ? "app__btn_wrapper content__btn full share__btn"
          : "app__btn_wrapper content__btn share__btn"
      }
    >
      <div
        className="btn__name_wrapper"
        onClick={() => handleActiveModal(ModalTypes.SHARE)}
      >
        <div className="btn__icon">
          <BsPersonPlus className="icon" />
        </div>
        <div className="btn__name">Share</div>
      </div>
    </div>
  );
};

export default ShareButton;
