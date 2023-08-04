import { configureStore, createSlice } from '@reduxjs/toolkit';


const initial = {counter : 0, showCounter: true}

const counterSlice = createSlice({
  name: 'Counter',
  initialState: initial,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
})

const authenticated = {
  isAuthenticated : false,
}

const authSlice = createSlice({
  name: 'Authentication',
  initialState: authenticated,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

export const authAction = authSlice.actions;
export const counterAction = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
