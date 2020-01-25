import mocker from "mocker-data-generator";
import { TaskSchema } from "./task";

export const ColumnSchema = {
  id: {
    faker: "random.uuid"
  },
  title: {
    faker: "random.word"
  },
  tasks: {
    hasMany: "task",
    get: "id",
    min: 1
  }
};

export const ColumnsGenerator = () =>
  mocker()
    .schema("task", TaskSchema, 10)
    .schema("columns", ColumnSchema, 10)
    .build()
    .then(({ columns }) => columns);
