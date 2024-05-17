import { useState } from 'react';
import './App.css';
import TodoCount from './TodoCount';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

const init = [
  {
    id: 1,
    text: '잘먹고 잘살기',
    done: false,
  },
  {
    id: 2,
    text: '맛있는거 먹고 살기',
    done: false,
  },
  {
    id: 3,
    text: '닭발 먹고프다',
    done: false,
  },
  {
    id: 4,
    text: '매운거 먹고싶당',
    done: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoCount todos={todos} />
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
