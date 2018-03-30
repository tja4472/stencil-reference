import { Component } from "@stencil/core";

@Component({
  tag: "tjaex-loop-map",
  styleUrl: "tjaex-loop-map.css"
})
export class LoopMap {
  todos = [
    { taskName: "Task 1", isCompleted: false },
    { taskName: "Task 2", isCompleted: false },
    { taskName: "Task 3", isCompleted: false }
  ];

  render() {
    return (
      <div>
        <h1>tjaex-loop-map</h1>
        {this.todos.map(todo => (
          <div>
            <div>{todo.taskName}</div>
            <div>{todo.isCompleted}</div>
          </div>
        ))}
      </div>
    );
  }
}
