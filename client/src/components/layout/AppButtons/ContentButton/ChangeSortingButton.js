import React from "react";

const ChangeSortingButton = props => {
  return (
    <div className="app__btn_wrapper content__btn change_sorting__btn">
      <div className="btn__name_wrapper">
        {/* <div className="btn__name">{props.sortingCriteria}</div> */}
        <div className="btn__name">Sorted by due date</div>
      </div>
    </div>
  );
};

export default ChangeSortingButton;
