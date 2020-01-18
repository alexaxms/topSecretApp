import React from "react";
import Task from "../task/Task";
import { Droppable } from "react-beautiful-dnd";
const styles = require("./Column.module.scss");

interface IColumn {
  column: { id: string; title: string };
  tasks: { id: string; content: string }[];
}

const Column: React.FC<IColumn> = ({ column, tasks }: any) => {
  return (
    <div className={styles.columnContainer}>
      <h3 className={styles.title}>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provied, snapshot) => (
          <div
            ref={provied.innerRef}
            {...provied.droppableProps}
            className={`${styles.tasksList} ${
              snapshot.isDraggingOver ? styles.lightblue : styles.white
            }`}
          >
            {tasks.map((task: any, index: number) => (
              <Task key={task.id} task={task} index={index}></Task>
            ))}
            {provied.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
