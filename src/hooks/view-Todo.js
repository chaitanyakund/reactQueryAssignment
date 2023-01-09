import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTodo = ({queryKey}) => { 
    const contactId = queryKey[1]
  return axios.get(`http://localhost:4000/todos/${contactId}`);
};

export const useTodoData = (contactId) => {
  return useQuery( {queryKey:["todos", contactId], queryFn:fetchTodo})
};

