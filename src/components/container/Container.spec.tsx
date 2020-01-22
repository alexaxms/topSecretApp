import React from "react";
import { shallow } from "enzyme";
import Container from "./Container";

describe("Container component", () => {
  test("should component be instantiated correctly", () => {
    const component = shallow(<Container />);
    expect(component).toBeDefined();
  });
});
