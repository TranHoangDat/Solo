import React, { useEffect, useState } from "react";

const CtaButton = props => {
  return (
    <div className={props.available ? "cta__btn available" : "cta__btn"}>
      {props.btnName}
    </div>
  );
};

export default CtaButton;
