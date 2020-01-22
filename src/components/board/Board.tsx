import React, { useState } from "react";
import Container from "components/container/Container";
import Column from "components/column/Column";
import { DragDropContext } from "react-beautiful-dnd";
// TODO: Refactor to api
import initialData from "helpers/initial-data";
const styles = require("./Board.module.scss");

const Board: React.FC = () => {
  const [data, setData]: any = useState(initialData);

  const onDragEnd = (drag: any) => {
    // TODO: immutability-helper
    const { destination, source, draggableId } = drag;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTasksIds = Array.from(start.tasksIds);
      newTasksIds.splice(source.index, 1);
      newTasksIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        tasksIds: newTasksIds
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      };

      setData(newState);
      return;
    }

    const startTasksIds = Array.from(start.tasksIds);
    startTasksIds.splice(source.index, 1);
    const newStart = {
      ...start,
      tasksIds: startTasksIds
    };

    const finishTasksIds = Array.from(finish.tasksIds);
    finishTasksIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      tasksIds: finishTasksIds
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    setData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.boardContainer}>
        <Container>
          {data.columnsOrder.map((columnId: string) => {
            const column = data.columns[columnId];
            const tasks = column.tasksIds.map(
              (taskId: string) => data.tasks[taskId]
            );
            return <Column key={columnId} column={column} tasks={tasks} />;
          })}
        </Container>
      </div>
    </DragDropContext>
  );
};

export default Board;
