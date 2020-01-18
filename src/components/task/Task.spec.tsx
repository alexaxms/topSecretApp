import React from "react";
import { shallow } from "enzyme";
import Task from "./Task";
import { TasksGenerator } from "__mocks__/generators";

describe("Task component", () => {
  let tasks: any;

  beforeEach(async () => {
    tasks = await TasksGenerator();
  });

  afterEach(() => {
    tasks = null;
  });

  test("should component is instantiated correctly", () => {
    const [task] = tasks;
    const component = shallow(<Task index={0} task={task} />);
    expect(component).toBeDefined();
  });
});
