import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchTodos = () => {
  return axios.get("http://localhost:4000/todos");
};

const addTodo = (todos) => {
  return axios.post("http://localhost:4000/todos", todos);
};

const deleteTodo = (id) => {
  return axios.delete(`http://localhost:4000/todos/${id}`);
};

export const useTodosData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["Todos"],
    queryFn: fetchTodos,
    onSuccess,
    onError
  });
};

export const useAddTodosData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Todos"] });
      //   to invalidate query it is wasting  one server update
      //   queryClient.setQueryData("contacts", (oldQueryData) => {
      //     return {
      //       ...oldQueryData,
      //       data: [...oldQueryData.data, data.data],
      //     };
      //   });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Todos"] });
    },
  });
};
