import React, { useState, useEffect, useRef } from "react";
import SelectProjectMenu from "../../AppMenus/SelectProjectMenu";
import SingleProjectIcon from "../../Icons/SingleProjectIcon";

const FullSelectProjectButton = props => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="app__btn_wrapper task__btn select_project__btn">
      <div
        className="task__btn_wrapper"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <div className="btn__icon">
          <SingleProjectIcon width={12} color={"charcoal"} />
        </div>
        <div className="btn__name">
          <span className="btn__name_item project__name">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
          <span className="delimiter"> / </span>
          <span className="btn__name_item section__name">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
        </div>
      </div>
      {activeMenu && <SelectProjectMenu setActiveMenu={setActiveMenu} />}
    </div>
  );
};

export default FullSelectProjectButton;
