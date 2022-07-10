import React, { useState, useEffect, useContext } from "react";
import { BiCheck } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { useModal, useModalUpdate } from "@contexts/ModalContext";
import AddButton from "../AppButtons/CtaButton/AddButton";
import CancelButton from "../AppButtons/CtaButton/CancelButton";
import "./AddProjectModal.scss";
import {ProjectContext} from '../../../contexts/ProjectContext';
import { useAlert } from 'react-alert';
const AddProjectModal = props => {
  //Context 
  const {
    projectState: {project}, 
    addProject,
    updateProject,
    findProject
  } = useContext(ProjectContext);
  const alert = useAlert();

  //State
  const { ModalTypes, modal } = useModal();
  const handleActiveModal = useModalUpdate();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Charcoal");
  const [selectedColorClass, setSelectedColorClass] = useState("charcoal");
  const [selectedView, setSelectedView] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [clickLoading, setClickLoading] = useState(false);

  function colorClassToColorName(colorClass) {
    let colorName = "";
    colorClass.split("__").forEach(word => {
      colorName += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    });
    return colorName.trim();
  }

  function handleDropdownItemClick(colorClass) {
    let colorName;
    colorName = colorClassToColorName(colorClass);
    setSelectedColor(colorName);
    setSelectedColorClass(colorClass);
    setDropdownActive(false);
  }

  useEffect(() => {
    if(!project) return;

    setProjectName(project.name);
    colorClassToColorName(project.color);
    setSelectedView(project.view==='LIST'? 0 : 1);
  }, [project]);

  const closeModal = () => {
    findProject(null);
    handleActiveModal(ModalTypes.NONE);
  }
  //
  const onSubmitProject = async () => {
    setClickLoading(true);
    try {
      let response;
      const newProject = {
        name: projectName,
        color: selectedColorClass,
        view: selectedView == 0 ? 'LIST' : 'BOARD' ,
      }
      if(!project) {
        response = await addProject(newProject);
      }
      else {
        response = await updateProject({...newProject, id: project.id});
      }

      if(response.success) {
        //Đặt lại các state ban đầu
        setProjectName("");
        setSelectedColor("Charcoal");
        setSelectedColorClass("charcoal");
        setSelectedView(0);
        //Ẩn modal
        handleActiveModal(ModalTypes.NONE);
      }
      else {
        alert.show(response.message, {
          type: 'error'
        });
      }
    }
    catch(err) {
      console.log(err.message);
    }
    setClickLoading(false);
  }

  return (
    <div
      className={
        modal === ModalTypes.ADD_PROJECT
          ? "modal app__modal active"
          : "modal app__modal"
      }
      id="add_project__modal"
    >
      <div className="modal__header">
        <div className="modal__title">{project ? 'Edit Project' : 'Add project'}</div>
        <div className="modal__help">
          <BsQuestionCircle style={{ color: "#202020", fontSize: "1.1rem" }} />
        </div>
      </div>
      <div className="modal__body">
        <div className="modal__wrapper">
          <div className="modal__label">Name</div>
          <div className="modal__input">
            <input
              className="input__box input__text"
              type="search"
              name="name"
              autoComplete="off"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="modal__wrapper">
          <div className="modal__label">Color</div>
          <div className="modal__input">
            <div
              className={`input__box dropdown__item project__color ${selectedColorClass}`}
              onClick={() => setDropdownActive(!dropdownActive)}
            >
              {selectedColor}
            </div>
            <ul
              className={
                dropdownActive ? "dropdown__menu active" : "dropdown__menu"
              }
            >
              {props.colorClasses.map(colorClass => (
                <li
                  className={
                    colorClass === selectedColorClass
                      ? `dropdown__item project__color ${colorClass} selected `
                      : `dropdown__item project__color ${colorClass}`
                  }
                  onClick={() => handleDropdownItemClick(colorClass)}
                >
                  {colorClassToColorName(colorClass)}
                  <BiCheck className="check__icon" />
                </li>
              ))}
            </ul>
            <div className="toggle__switch">
              Add to favorites
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="modal__wrapper">
          <div className="modal__label">View</div>
          <div className="modal__input skeleton__select">
            <label className="skeleton__option">
              <input
                type="checkbox"
                defaultChecked={selectedView == 0 ? true : false}
                onClick={() => setSelectedView(0)}
                checked={selectedView == 0 ? true : false}
              ></input>
              <div className="skeleton__option_view input__box view__list">
                <div className="view__wrapper">
                  <div className="view__item"></div>
                </div>
                <div className="view__wrapper">
                  <div className="view__item"></div>
                </div>
                <div className="view__wrapper">
                  <div className="view__item"></div>
                </div>
                <div className="view__wrapper">
                  <div className="view__item"></div>
                </div>
              </div>
              <div className="skeleton__option_selection">
                List
                <span className="skeleton__option_checkmark"></span>
              </div>
            </label>
            <label className="skeleton__option">
              <input
                type="checkbox"
                defaultChecked={selectedView == 1 ? true : false}
                onClick={() => setSelectedView(1)}
                checked={selectedView == 1 ? true : false}
              ></input>
              <div className="skeleton__option_view input__box view__board">
                <div className="view__wrapper">
                  <div className="view__item"></div>
                  <div className="view__item"></div>
                  <div className="view__item"></div>
                </div>
                <div className="view__wrapper">
                  <div className="view__item"></div>
                  <div className="view__item"></div>
                </div>
                <div className="view__wrapper">
                  <div className="view__item"></div>
                </div>
                <div className="view__wrapper">
                  <div className="view__item"></div>
                </div>
              </div>
              <div className="skeleton__option_selection">
                Board
                <span className="skeleton__option_checkmark"></span>
              </div>
            </label>
          </div>
          <p className="modal__description">
            View is synced between teammates in shared projects.
            <a className="modal__link">Learn more</a>.
          </p>
        </div>
      </div>
      <div className="modal__footer">
        <CancelButton
          handleOnClick={closeModal}
        />
        <AddButton
          btnName={project ? 'Save' : 'Add'}
          clickLoading={clickLoading}
          available={projectName === "" ? false : true}
          handleOnClick={onSubmitProject}
        />
      </div>
    </div>
  );
};

export default AddProjectModal;
