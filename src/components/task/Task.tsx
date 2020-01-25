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
          className={`
            ${styles.taskContainer} 
            ${snapshot.isDragging ? styles.dragging : styles.white} 
          `}
        >
          <img className={styles.image} src={task.avatar} alt="" />
          <div className={styles.content}>
            <div className={styles.description}>{task.description}</div>
            <div className={styles.userName}>
              <small style={{ backgroundColor: task.nameColor }}>
                {task.userName}
              </small>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
