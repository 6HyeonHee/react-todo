import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo) => (
        // TodoItem.jsx에 해당 부분을 다 보낸다 !!
        <TodoItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ))}
    </ul>
  );
}
