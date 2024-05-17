import { useRef, useState } from 'react';
import styles from './TodoAdd.module.css';

export default function TodoAdd({ todos, setTodos }) {
  const [txt, setTxt] = useState('');
  const idRef = useRef(todos.length);

  function handleEnter(e) {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }

  function handleAdd() {
    if (txt.trim()) {
      const newTodo = {
        id: ++idRef.current,
        text: txt,
        done: false,
      };
      setTodos([...todos, newTodo]);
      setTxt(''); // 입력 필드를 초기화합니다.
    }
  }

  return (
    <div className={styles.todo_add}>
      <input
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        type="text"
        placeholder="할 일을 입력하세요"
        title="할 일을 입력하세요"
        onKeyUp={handleEnter}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
