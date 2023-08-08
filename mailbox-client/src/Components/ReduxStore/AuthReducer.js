import {configureStore, createSlice} from '@reduxjs/toolkit';

const authentication = {
  isAuth: !!localStorage.getItem('idToken'),
}

const Authslice = createSlice({
  name: 'Authentication',
  initialState: authentication,
  reducers: {
    login(state){
      state.isAuth = !!localStorage.getItem('idToken');
    },
    logout(state){
      localStorage.removeItem('email');
      localStorage.removeItem('idToken');
      state.isAuth = false;
    }
  }
})

export const AuthAction = Authslice.actions;
const store = configureStore({
  reducer: {
    auth: Authslice.reducer
  }
})

export default store;