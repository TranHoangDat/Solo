import React from "react";
import "./CtaButton.scss";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

const AddButton = props => {
  const {clickLoading} = props;
  const color = "#fff";
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const onClick = () => {
    if(props.available && !clickLoading) {
      props.handleOnClick()
    }
  }

  return (
    <div
      className={
        props.available
          ? "cta__btn bg__red add__btn available"
          : "cta__btn bg__red add__btn"
      }
      onMouseDown={e => e.preventDefault()}
      onClick={onClick}
    >
      {!clickLoading && <>{props.btnName}</>}
      {clickLoading && 
      <PulseLoader
        color={color} 
        loading={clickLoading} 
        css={override} 
        size={5}	
        margin={2} />}
    </div>
  );
};

export default AddButton;
