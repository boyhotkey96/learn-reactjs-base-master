import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { StorageKeys } from 'constants/StorageKeys';

export const register = createAsyncThunk('user/register', async (payload, { isRejectedWithValue }) => {
  // call api to register
  const data = await userApi.register(payload);

  console.log(data);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

export const login = createAsyncThunk('user/login', async (payload, { isRejectedWithValue }) => {
  // call api to register
  const data = await userApi.login(payload);

  console.log(data);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
    logout: (state) => {
      // logout not call api, only update state
      state.current = null;
      state.errorMessage = '';
      // remove data to local storage
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
    },
  },
  /* extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  }, */
  extraReducers: (builder) => {
    // Start running action login (Promise pending)
    builder
      .addCase(register.pending, (state) => {
        // open state isLoading
        state.isLoading = true;
      })
      // When running action login success (Promise fulfilled)
      .addCase(register.fulfilled, (state, action) => {
        // close state isLoading, save user info to store
        state.isLoading = false;
        state.current = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        // close state isLoading, save user error message to store
        state.isLoading = false;
        if (action.payload) {
          state.errorMessage = action.payload.message;
        } else {
          state.errorMessage = action.error.message;
        }
      });
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
