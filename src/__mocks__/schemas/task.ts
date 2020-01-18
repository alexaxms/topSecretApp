import mocker from "mocker-data-generator";

export const TaskSchema = {
  id: {
    faker: "random.uuid"
  },
  content: {
    faker: "random.words"
  }
};

export const TasksGenerator = () =>
  mocker()
    .schema("tasks", TaskSchema, 10)
    .build()
    .then(({ tasks }) => tasks);
