import React from "react";
import { Draggable } from "react-beautiful-dnd";
const styles = require("./Task.module.scss");

interface ITask {
  index: number;
  task: { id: string; content: string };
}

const Task: React.FC<ITask> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${styles.taskContainer} ${
            snapshot.isDragging ? styles.lightgreen : styles.white
          }`}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
