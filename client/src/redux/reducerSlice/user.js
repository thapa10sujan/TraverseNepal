import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userName: '',
  token:'',
  fullName:'',
  phoneNumber:'',
  isLoggedIn: false,
  email: '',
  
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      setUserDetails(state) {
       //code here
      },
    },
  })

export const { setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;