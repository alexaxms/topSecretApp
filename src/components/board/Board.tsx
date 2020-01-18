import React, { useState } from "react";
import Column from "../column/Column";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../../helpers/initial-data";

const Board: React.FC = () => {
  const [data, setData]: any = useState(initialData);

  const onDragEnd = (drag: any) => {
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

    const column = data.columns[source.droppableId];
    const newTasksIds = Array.from(column.tasksIds);
    newTasksIds.splice(source.index, 1);
    newTasksIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
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
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="column-container">
        {data.columnsOrder.map((columnId: string) => {
          const column = data.columns[columnId];
          const tasks = column.tasksIds.map(
            (taskId: string) => data.tasks[taskId]
          );
          return <Column key={columnId} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default Board;
