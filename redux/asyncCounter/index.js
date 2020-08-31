import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { waitForSomeTime } from "./api"

export const increment = createAsyncThunk(
  "asyncCounter/increment",
  async () => {
    await waitForSomeTime()
  }
)

export const decrement = createAsyncThunk(
  "asyncCounter/decrement",
  async () => {
    await waitForSomeTime()
  }
)

const asyncCounterSlice = createSlice({
  name: "asyncCounter",
  initialState: { count: 0, loading: false },
  extraReducers: {
    [increment.pending]: (state) => {
      state.loading = true
    },
    [increment.fulfilled]: (state) => {
      state.loading = false
      state.count += 1
    },
    [decrement.pending]: (state) => {
      state.loading = true
    },
    [decrement.fulfilled]: (state) => {
      state.loading = false
      state.count -= 1
    },
  }
})

export const {
  reducer: asyncCounterReducer,
  actions: asyncCounterActions,
} = asyncCounterSlice;
