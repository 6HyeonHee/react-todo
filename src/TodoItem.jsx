import Checkbox from './components/Checkbox';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, todos, setTodos }) {
  function handleDone() {
    // t = 배열 안에 요소 전체를 의미함.
    // todo = 선택된 배열 요소 (하나씩 넘어옴.)
    const nextTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return t;
      }
    });
    setTodos(nextTodos);
  }

  function handleRemove() {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    return setTodos(newTodos);
  }

  return (
    <li className={`${styles.todo_item} ${todo.done ? styles.checked : ''}`}>
      <Checkbox onChange={handleDone}>{todo.text}</Checkbox>
      <button
        onClick={handleRemove}
        className={styles.remove_btn}
        type="button"
      >
        Remove
      </button>
    </li>
  );
}
