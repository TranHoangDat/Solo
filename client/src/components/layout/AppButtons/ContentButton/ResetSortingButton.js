import React from "react";

const ResetSortingButton = props => {
  function handleOnClick() {
    // ...
    props.setActive(false);
  }

  return (
    <div className="app__btn_wrapper content__btn reset_sorting__btn">
      <div className="btn__name_wrapper" onClick={() => handleOnClick()}>
        <div className="btn__icon">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M8.854 8.146L12 11.293l3.146-3.147a.502.502 0 01.708.708L12.707 12l3.147 3.146a.502.502 0 01-.708.708L12 12.707l-3.146 3.147a.502.502 0 01-.708-.708L11.293 12 8.146 8.854a.502.502 0 01.708-.708z"
              fill="#808080"
              fillRule="nonzero"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ResetSortingButton;
