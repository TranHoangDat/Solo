import React from "react";
import { NotificationItem } from "./NotificationTabContent";

const UnreadTabContent = () => {
  const NotificationType = {
    OTHER: -1,
    JOINING: 0, // Collaborator join a project.
    REJECTING: 1, // Collaborator reject joining/left a project.
    ASSIGNING: 2, // Collaborator assign a task for the user.
    ADDING_COMMENT: 3, // Collaborator add a comment.
  };

  return (
    <div className="unread__tab_content">
      <ul className="notification__list">
        <NotificationItem
          unread={true}
          type={NotificationType.ADDING_COMMENT}
          userName={"tranhoangdat77"}
          summaryDescription={"added a project comment to"}
          projectName={"Welcome"}
          detailedDescription={"'a'"}
          typeList={NotificationType}
        />
        <NotificationItem
          unread={true}
          type={NotificationType.OTHER}
          userName={"tranhoangdat77"}
          summaryDescription={"invited you to"}
          projectName={"Welcome"}
          typeList={NotificationType}
          invitation={true}
        />
        <NotificationItem
          unread={true}
          type={NotificationType.OTHER}
          summaryDescription={"You joined"}
          projectName={"Welcome"}
          typeList={NotificationType}
        />
        <NotificationItem
          unread={true}
          type={NotificationType.JOINING}
          userName={"tranhoangdat77"}
          summaryDescription={"joined"}
          projectName={"Welcome"}
          typeList={NotificationType}
        />
        <NotificationItem
          unread={true}
          type={NotificationType.REJECTING}
          userName={"tranhoangdat77"}
          summaryDescription={"left"}
          projectName={"Welcome"}
          typeList={NotificationType}
        />
        <NotificationItem
          unread={true}
          type={NotificationType.ASSIGNING}
          userName={"tranhoangdat77"}
          summaryDescription={"assigned a task in"}
          projectName={"Welcome"}
          detailedDescription={"a"}
          typeList={NotificationType}
        />
      </ul>
    </div>
  );
};

export default UnreadTabContent;
