import { useState } from "react";
import FormPage from "./FormPage";
import TodoList from "./TodoList";
import LearnDynamicCheckbox from "../checkbox/LearnDynamicCheckbox";

interface TodoList {
  id: number;
  title: string;
}

const Todo = () => {
  const [todoData, setTodoData] = useState<TodoList[]>([]);
  const [filteredData, setFilteredData] = useState<TodoList | undefined>();

  const addTodos = (title: string) => {
    const newTodo: TodoList = { id: Math.random(), title: title };
    setTodoData([...todoData, newTodo]);
  };

  const editTodos = (title: string) => {
    const updatedData = todoData.map((list) =>
      list.id === filteredData?.id ? { ...list, title: title } : list
    );
    setTodoData(updatedData);
    setFilteredData(undefined);
  };

  const editHandler = (title: string) => {
    const data = todoData?.find((data) => data.title === title);
    setFilteredData(data);
  };

  const deleteHandler = (id: number) => {
    const data = todoData.filter((list) => list.id !== id);
    setTodoData(data);
  };

  return (
    <div className="todo-container">
      <div className="form-container">
        <FormPage
          handleTodos={addTodos}
          editData={filteredData}
          editTodos={editTodos}
        />
        <LearnDynamicCheckbox />
      </div>
      <div className="list-container">
        <TodoList
          todoDatas={todoData}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </div>
  );
};

export default Todo;
