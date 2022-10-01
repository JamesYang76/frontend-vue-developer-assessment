import axios from "axios";
import {TODOS_URL} from "../constants/url";

export const addTodoItemAPI = (todoItem) => axios.post(TODOS_URL, todoItem)
export const getTodoItemsAPI = () => axios.get(TODOS_URL)
export const toggleTodoItemsAPI = (todoItem) => axios.put(`${TODOS_URL}/${todoItem.id}`,todoItem)
