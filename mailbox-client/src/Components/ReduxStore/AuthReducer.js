import {configureStore, createSlice} from '@reduxjs/toolkit';
//for Authentication
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


//for mail handling
const mailState = {
  mails: [],
  sentMails: [],
  unRead: 0
}
const Mailslice = createSlice({
  name:'MailBox',
  initialState: mailState,
  reducers: {
    updateInbox(state, action){
      state.mails = action.payload;
    },
    updateSentBox(state, action){
      state.sentMails = action.payload
    },
    updateUnread(state, action){
      state.unRead = action.payload;
    }
  }
})
//exporting actions
export const AuthAction = Authslice.actions;
export const MailAction = Mailslice.actions;
const store = configureStore({
  reducer: {
    auth: Authslice.reducer,
    mail:Mailslice.reducer
  }
})

export default store;