import { styled } from "@mui/system";
import { useState } from "react";
import TodoForm from "./components/todo/TodoForm";
import TodoList, { Todo } from "./components/todo/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: "1",
      todo: "to complete homeworks",
      completed: false,
    },
  ]);

  const addTodo = (todo: string): void => {
    const data: Todo = {
      id: Math.random().toString(),
      todo: todo,
      completed: false,
    };
    setTodoList([...todoList, data]);
  };

  const completeTodo = (id: string): void => {
    setTodoList(
      todoList.map(
        (todo: Todo): Todo =>
          todo.id === id
            ? Object.assign(todo, { completed: true }) && todo
            : todo
      )
    );
  };

  const deleteTodo = (id: string): void => {
    setTodoList(
      todoList.filter((todo: Todo): Todo | null =>
        todo.id !== id ? todo : null
      )
    );
  };

  return (
    <div>
      <MainDiv>
        <TodoForm addTodo={addTodo} />
        <div>
          {todoList.map((todo: Todo, key: number) => (
            <TodoList
              key={key}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </MainDiv>
    </div>
  );
};

export default App;


const MainDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}))