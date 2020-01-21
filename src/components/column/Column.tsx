import React from "react";
import Task from "components/task/Task";
import { Droppable } from "react-beautiful-dnd";
import { IColumn } from "models/column";
import { ITask } from "models/task";
const styles = require("./Column.module.scss");

interface IColumnProps {
  column: IColumn;
  tasks: ITask[];
}

const Column: React.FC<IColumnProps> = ({ column, tasks }: any) => {
  return (
    <div className={styles.columnContainer}>
      <h3 className={styles.title}>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provied, snapshot) => (
          <div
            ref={provied.innerRef}
            {...provied.droppableProps}
            // TODO: improve conditional styles
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
