import { styled } from "@mui/system";
import React, { FC, FormEvent, useState } from "react";

interface Props {
  addTodo(todo: string): void;
}

const TodoForm: FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>("");

  const handleTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <StyledForm onSubmit={handleTodo}>
      <input
        type="text"
        placeholder="Write here what do you want to do..."
        autoComplete="off"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{
          minHeight: "50px",
          paddingLeft: "20px",
          width: "100%",
          background: "white",
          fontSize: "18px",
          fontWeight: "200",
          border: "none",
          color: "#3a7bd5",
          borderRadius: "0 0 5px 5px",
        }}
      />
      <StyledButton type="submit">
        <i style={{ marginTop: "3px" }} className="fas fa-plus" />
      </StyledButton>
    </StyledForm>
  );
};

export default TodoForm;

const StyledForm = styled("form")(() => ({
  display: "flex",
  width: "100%",
  minHeight: "50px",
  marginBottom: "25px",
  borderRadius: "5px",
  overflow: "hidden",
  border: "3px solid #3a7bd5",
}));

const StyledButton = styled("button")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  fontSize: "20px",
  fontWeight: "200",
  border: "none",
  background: "#3a7bd5",
  color: "#ffffff",
  cursor: "pointer",
}));
