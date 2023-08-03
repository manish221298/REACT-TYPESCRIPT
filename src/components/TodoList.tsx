interface TodoListProps {
  todoDatas: { id: number; title: string }[];
  editHandler: (title: string) => void;
  deleteHandler: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todoDatas,
  editHandler,
  deleteHandler,
}) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoDatas?.map((list) => {
          return (
            <div className="todo-list">
              <div className="list-title">
                <span>{list?.title}</span>
              </div>
              <div className="list-button">
                <button onClick={() => editHandler(list?.title)}>EDIT</button>
                <button onClick={() => deleteHandler(list?.id)}>DELETE</button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
