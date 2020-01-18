import React from "react";
import { shallow } from "enzyme";
import Column from "./Column";
import { ColumnsGenerator } from "__mocks__/generators";

describe("Column component", () => {
  let columns: any;

  beforeAll(async () => {
    columns = await ColumnsGenerator();
  });

  afterEach(() => {
    columns = null;
  });

  test("should component be instantiated correctly", () => {
    const [column] = columns;
    const { tasks } = column;
    const component = shallow(<Column column={column} tasks={tasks} />);
    expect(component).toBeDefined();
  });
});
