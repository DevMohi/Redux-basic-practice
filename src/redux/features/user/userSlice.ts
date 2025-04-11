import { TUser, TUserDraft } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// interface InitialState {
//     users : TUser[]
// }

const initialState: TUser = {
  users: [
    {
      id: "123456e54fdg",
      userName: "Hammad Sadi",
    },
    {
      id: "1234sdrthb56e54fdg",
      userName: "Zakiya Mim",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TUserDraft>) => {
      const userData = {
        id: nanoid(),
        ...action.payload,
      };
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
