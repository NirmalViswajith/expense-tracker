import { configureStore, createSlice } from '@reduxjs/toolkit';

// Retrieve theme preference from local storage, default to light mode
const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme ? savedTheme === 'dark' : false;

const themeSlice = createSlice({
  name: 'Theme',
  initialState: { isDark: initialTheme },
  reducers: {
    toggletheme(state) {
      const newTheme = !state.isDark;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      state.isDark = newTheme;
    },
  },
});

const isLogged = {
  isAuthenticated: false,
};

const Authslice = createSlice({
  name: 'Authentication',
  initialState: isLogged,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      state.isAuthenticated = false;
    },
  },
});

const expenseItems = {
  items: [],
};

const ExpenseSlice = createSlice({
  name: 'ExpenseItems',
  initialState: expenseItems,
  reducers: {
    addExpense(state, action) {
      state.items.push(action.payload);
    },
    editExpense(state, action) {
      const edited = action.payload;
      const index = state.items.findIndex((expense) => expense.id === edited.id);
      if (index !== -1) {
        state.items[index] = edited;
      }
    },
    deleteExpense(state, action) {
      state.items = state.items.filter((expense) => expense.id !== action.payload);
    },
  },
});

export const expenseAction = ExpenseSlice.actions;
export const authAction = Authslice.actions;
export const themeAction = themeSlice.actions;

const store = configureStore({
  reducer: {
    authReducer: Authslice.reducer,
    expenseReducer: ExpenseSlice.reducer,
    themeReducer: themeSlice.reducer,
  },
});

export default store;
