const { Square, Triangle, Circle } = require("./shapes.js");

describe("Square test", () => {
  test("test for square with a blue background", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="20" y="20" width="150" height="150" fill="blue" />'
    );
  });
});

describe("Triangle test", () => {
  test("test for triangle with a yellow background", () => {
    const shape = new Triangle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="yellow" />'
    );
  });
});

describe("Circle test", () => {
  test("test for circle with a green background", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="125" r="50" fill="green" />'
    );
  });
});
