import React, { useState } from "react";
import SortMenu from "../../AppMenus/SortMenu";

const SortButton = props => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div
      tabIndex={1}
      className={
        props.full
          ? "app__btn_wrapper content__btn full sort__btn"
          : "app__btn_wrapper content__btn sort__btn"
      }
      onBlur={() => setActiveMenu(false)}
    >
      <div
        className="btn__name_wrapper"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <div className="btn__icon">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#808080"
              d="M16.854 5.146l3 3a.502.502 0 01-.708.708L17 6.707V18.5a.5.5 0 01-1 0V6.707l-2.146 2.147a.502.502 0 01-.708-.708l3-3a.502.502 0 01.708 0zM7.5 5a.5.5 0 01.5.5v11.791l2.146-2.145a.502.502 0 01.708.708l-3 3a.502.502 0 01-.708 0l-3-3a.502.502 0 01.708-.708L7 17.293V5.5a.5.5 0 01.5-.5z"
            ></path>
          </svg>
        </div>
        <div className="btn__name">Sort</div>
      </div>
      {activeMenu && <SortMenu setActiveMenu={setActiveMenu} />}
    </div>
  );
};

export default SortButton;
