
import axios from "axios";
import {TODOS_URL} from "../constants/url";

export const addTodoItemAPI = (todoItem) => { return axios.post(TODOS_URL, todoItem) }
export const  getTodoItemsAPI = () => { return axios.get(TODOS_URL) }
export const  toogleTodoItemsAPI = (todoItem) => { return axios.put(`${TODOS_URL}/${todoItem.id}`,todoItem) }
