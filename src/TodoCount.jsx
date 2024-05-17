import styles from './TodoCount.module.css';

export default function TodoCount({ todos }) {
  // todos 배열 요소 중 todo.done이 true인 경우를 골라 길이 측정.
  const doneCount = todos.filter((todo) => todo.done === true);

  return (
    <div className={styles.todo_count}>
      완료: {doneCount.length}/ 할 일 : {todos.length}
    </div>
  );
}
