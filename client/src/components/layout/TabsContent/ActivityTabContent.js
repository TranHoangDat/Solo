import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./ActivityTabContent.scss";

const ActivityTabContent = (props) => {
  const activityContentRef = useRef(null);
  const [activityOffset, setActivityOffset] = useState(
    window.innerWidth < 751 ? 29 : 55
  );

  useEffect(() => {
    const updateActivityOffset = () => {
      let offset = 0;

      if (window.innerWidth < 751) {
        offset = 29;
      } else {
        offset = 55;
      }

      setActivityOffset(offset);
    };

    window.addEventListener("resize", updateActivityOffset);

    return () => {
      window.removeEventListener("resize", updateActivityOffset);
    };
  }, []);

  useEffect(() => {
    activityContentRef.current.style.maxHeight =
      props.height - activityOffset + "px";
  }, [props.height]);

  useEffect(() => {
    activityContentRef.current.style.maxHeight =
      props.height - activityOffset + "px";
  }, [activityOffset]);

  return (
    <div className="activity__tab_content" ref={activityContentRef}>
      <div className="activity__title_wrapper">
        <div className="activity__title">Added</div>
        <div className="activity__date">on 2 jun 10:51</div>
      </div>
      <div className="activity__list_wrapper">
        <div className="activity__date_wrapper">
          <div className="activity__date_distance">2 days ago</div>
          <div className="activity__date">Fri 4 Jun</div>
        </div>
        <div className="activity__list">
          <Activity />
          <Activity />
          <Activity />
        </div>
      </div>
      <div className="tab__load_btn">Load more history from 2 weeks ago...</div>
    </div>
  );
};

const Activity = () => {
  return (
    <div className="activity">
      <div className="participant__avatar">
        <FaUserCircle style={{ fontSize: "3.25rem" }} />
        <div className="activity__symbol_icon"></div>
      </div>
      <span className="participant__name">You </span>
      <span className="activity__summary">completed a task: </span>
      <span className="activity__detail">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        <br />
      </span>
      <span className="activity__time">20:30</span>
    </div>
  );
};

export default ActivityTabContent;
