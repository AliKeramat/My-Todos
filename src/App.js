import TodoCard from "./components/component";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <TodoCard title="Go to work" />
      <TodoCard title="Rest" />
      <TodoCard title="Online meeting" />
      <TodoCard title="Dinner with family" />
      <TodoCard title="Sleep" />
    </div>
  );
}

export default App;
