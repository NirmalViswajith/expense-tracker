import { configureStore, createSlice } from '@reduxjs/toolkit';

const theme = {
  isDark: false,
};

const themeSlice = createSlice({
  name: 'Theme',
  initialState: theme,
  reducers: {
    toggletheme(state) {
      state.isDark = !state.isDark;
    },
  },
});

const isLogged = {
  isAuthenticated: false
}
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
    }
  }
});

const expenseItems = {
  items: []
}

const ExpenseSlice = createSlice({
  name:'ExpenseItems',
  initialState: expenseItems,
  reducers: {
    addExpense(state, action){
      state.items.push(action.payload);
    },
    editExpense(state, action){
      const edited = action.payload;
      const index = state.items.findIndex((expense) => expense.id === edited);
      if(index !== -1){
        state.items[index] = edited
      }
    },
    deleteExpense(state,action){
      state.items = state.items.filter((expense) => expense.id !== action.payload);
    }
  }
})

export const expenseReducer = ExpenseSlice.reducer;
export const authAction = Authslice.actions;
export const themeAction = themeSlice.actions;

const store = configureStore({
  reducer: {
    authReducer: Authslice.reducer,
    expenseReducer: expenseReducer,
    themeReducer: themeSlice.reducer
  } 
});

export default store;
