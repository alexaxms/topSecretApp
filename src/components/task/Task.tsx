import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITask } from "models/task";
const styles = require("./Task.module.scss");

interface ITaskProps {
  index: number;
  task: ITask;
}

const Task: React.FC<ITaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          // TODO: improve conditional styles
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
