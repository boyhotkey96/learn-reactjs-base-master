import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

export const register = createAsyncThunk('user/register', async (payload, thunkAPI) => {
  // call api to register
  const data = await userApi.register(payload);

  // save data to local storage
  localStorage.setItem('access-token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings: {},
    loading: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
