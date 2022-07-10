import React, { useState, useContext  } from "react";
import AddButton from "../AppButtons/CtaButton/AddButton";
import CancelButton from "../AppButtons/CtaButton/CancelButton";
import {ProjectContext} from '../../../contexts/ProjectContext';
import {SectionContext} from '../../../contexts/SectionContext';
import { useAlert } from 'react-alert';
const SectionInput = props => {
  //Context
  const {projectState: {projectActive}} = useContext(ProjectContext);
  const {addSection} = useContext(SectionContext);
  
  const alert = useAlert();

  //State
  const [sectionName, setSectionName] = useState("");
  const [clickLoading, setClickLoading] = useState(false);

  function handleCancelButton() {
    props.setActiveInput(false);
  }

  const onSubmitSeciton = async () => {
    setClickLoading(true);
    try{
      const newSection = {
        name: sectionName,
      }
      const response = await addSection(projectActive.id, newSection);
      
      if(response.success){
        setSectionName("");
        props.setActiveInput(false);
        handleCancelButton();
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
    <div className="section__input">
      <input
        type="text"
        className="input__box section__content_input"
        placeholder="Name this section"
        onChange={e => setSectionName(e.currentTarget.value)}
        autoFocus
      />
      <div className="input__buttons_wrapper">
        <AddButton 
          btnName={"Add section"}
          clickLoading={clickLoading}
          available={sectionName === "" ? false : true}
          handleOnClick={onSubmitSeciton}/>
        <CancelButton handleOnClick={handleCancelButton} />
      </div>
    </div>
  );
};

export default SectionInput;
