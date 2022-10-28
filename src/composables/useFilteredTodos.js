import { computed, ref } from "vue";
//使用计算属性和ref函数
export default function useFilteredTodos(todos) {
  const filter = ref("all");

  // 过滤 todo
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case "done":
        return todos.value.filter((todo) => todo.completed);
      case "todo":
        return todos.value.filter((todo) => !todo.completed);
      default:
        return todos.value;
    }
  });

  return { filter, filteredTodos };
}
