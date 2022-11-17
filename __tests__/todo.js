const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};
let dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
/* eslint-disable no-undef */
describe("To-dolist test", () => {
  beforeAll(() => {
    add({
      title: "Test todo tk 0",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Should add one to-do", () => {
    const tdCount = all.length;
    add({
      title: "Test todo tk 1",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(todoCount + 1);
  });
  test("need to Mark to-do as Complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("retrieve overdue items", () => {
    let ovrdue_todos = overdue();
    let countvar = ovrdue_todos.length;
    add({
      title: "Test todo tk 2",
      completed: false,
      dueDate: yesterday,
    });
    ovrduetodos = overdue();
    expect(ovrduetodos.length).toBe(countvar + 1);
  });
  test("must Retrieves due today items", () => {
    let dTodaytodos = dueToday();
    let countvar = dueToday_todos.length;
    add({
      title: "Test todo tk 3",
      completed: false,
      dueDate: today,
    });
    dTodaytodos = dueToday();
    expect(dTodaytodos.length).toBe(countvar + 1);
  });
  test("Retrieve the due-later items", () => {
    let duLtodos = dueLater();
    let countvar = dueLater_todos.length;
    add({
      title: "Test todo task4",
      completed: false,
      dueDate: tomorrow,
    });
    duLtodos = dueLater();
    expect(duLtodos.length).toBe(countvar + 1);
  });
});
