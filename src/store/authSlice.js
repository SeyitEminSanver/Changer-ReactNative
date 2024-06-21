import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    userId: null, // Kullanıcı ID'si başlangıçta null olarak tanımlı
  },
  reducers: {
    login: (state) => { state.isAuth = true; },
    logout: (state) => { state.isAuth = false; state.userId = null; }, // Çıkış yapıldığında userID'yi sıfırla
    setUserId: (state, action) => { state.userId = action.payload; }, // Kullanıcı ID'sini güncellemek için reducer
  },
});

export const { login, logout, setUserId } = authSlice.actions;
export default authSlice.reducer;