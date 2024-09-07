import React from "react";
import '../../styles/atoms/taskItem.scss';

const TaskItem = ({ task }) => (
  <div className="taskItem">
    <span>{task.text}</span>
  </div>
);

export default TaskItem;