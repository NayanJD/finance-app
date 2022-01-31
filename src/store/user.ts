import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  firstName: string;
  lastName: string;
}

const initialUserState: IUserState = {
  firstName: "Abraham",
  lastName: "Das",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    updateUserName: (state, action: PayloadAction<IUserState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { updateUserName } = userSlice.actions;

export default userSlice.reducer;
