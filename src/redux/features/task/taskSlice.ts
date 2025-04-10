import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}

//slice korbar jnno 3 ta jinish lage ->  name , initialState, reducers
//initialState same as schema
const initialState: InitialState = {
  //Multiple task ashbe tai array hishebe nicce
  tasks: [
    {
      id: "ahdja",
      title: "Initialize frontend",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "All",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
