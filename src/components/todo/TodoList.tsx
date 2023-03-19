import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import React, { FC } from "react";

export interface Todo {
  id: string;
  todo: string;
  completed: boolean;
}

interface Props {
  todo: Todo;
  key: number;
  completeTodo(id: string): void;
  deleteTodo: (id: string) => void;
}

const TodoList: FC<Props> = ({ todo, key, completeTodo, deleteTodo }) => {
  const todoComplete = (): void => {
    if (!todo.completed) {
      completeTodo(todo.id);
    }
  };

  const todoDelete = (): void => {
    deleteTodo(todo.id);
  };

  return (
    <StyledUl key={key}>
      <Li>
        {todo.completed ? (
          <span style={{ textDecorationLine: "line-through" }}>
            {todo.todo}
          </span>
        ) : (
          todo.todo
        )}
        <div>
        <Button onClick={todoComplete}>
          <i className="fas fa-check" />
        </Button>
        <Button type="button" onClick={todoDelete}>
          Delete
      </Button>
      </div>
      </Li>
    </StyledUl>
  );
};

export default TodoList;

const Li = styled("li")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  marginBottom: "20px",
  background: "#ffffff",
  color: "#3a7bd5",
  fontFamily: "Helvetica",
  fontWeight: "400",
  borderRadius: "3px",
}));

const StyledUl = styled("ul")(() => ({
  listStyle: "none",
  width: "100%",
  padding: "0",
  margin: "0",
}));
