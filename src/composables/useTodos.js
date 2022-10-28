// import { onMounted, ref } from "vue";
import {  ref } from "vue";
export default function useTodos() {
  const todos = ref([]);
  
  // 添加 todo
  const addTodo = (todo) => {
 
  
    
    todos.value.push(todo);}

  // const deleteTodo = (todo)=>todos.value.splice()
  // console.log(todos)
//   // 获取远程 todos
//   const fetchTodos = async () => {

//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos?_limit=10"
//     );

//     const rawTodos = await response.json();

//     todos.value = rawTodos.map((todo) => ({
//       id: todo.id,
//       content: todo.title,
//       completed: todo.completed,
//     }));
//   };
// //再使用的时候onMounted会再声明周期mounted中指向
//   onMounted(() => {
//     fetchTodos();
//   });

  return {
    todos,
    addTodo,
  };
}
