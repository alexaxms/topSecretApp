import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  test("should be defined", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });
});
