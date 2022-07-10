import React from "react";
import AppLabel from "../../AppLabel/AppLabel";

const MarkAsReadButton = props => {
  return (
    <div className="app__btn_wrapper mark_ar__btn">
      <div className="btn__name_wrapper">
        <input
          type="radio"
          checked={props.unread}
          onClick={() => props.setUnread(!props.unread)}
          onChange={e => {}}
          defaultChecked
        ></input>
      </div>

      <AppLabel
        content={"Mark as Read"}
        width={100}
        right={10}
        top={props.labelTop}
        arrow={true}
      />
    </div>
  );
};

export default MarkAsReadButton;
