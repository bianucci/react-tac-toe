import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Square } from "./Square";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Square />, div);
});

it("renders without crashing - isolated", () => {
    shallow(<Square />);
});
