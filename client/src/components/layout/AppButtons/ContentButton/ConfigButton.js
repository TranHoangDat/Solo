import React, { useEffect, useState } from "react";
import ConfigMenu from "../../AppMenus/ConfigMenu";

const ConfigButton = props => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (props.sidebarBtn) {
      setClassName("app__btn_wrapper content__btn config__btn sidebar__btn");
    } else {
      setClassName("app__btn_wrapper content__btn config__btn");
    }
  }, []);


  return (
    <div className={className} tabIndex={1}>
      <div
        className="btn__name_wrapper"
        onClick={() => setActiveMenu(!activeMenu)}
        onBlur={() => props.sidebarBtn && setActiveMenu(false)}
      >
        <div className="btn__icon">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      {activeMenu && (
        <ConfigMenu
          project={props.project}
          section={props.section}
          setActive={setActiveMenu}
          inboxProject={props.inboxProject}
          projectMenu={props.projectBtn}
          sectionMenu={props.sectionBtn}
          taskMenu={props.taskBtn}
          sidebarMenu={props.sidebarBtn}
        />
      )}
    </div>
  );
};

export default ConfigButton;
