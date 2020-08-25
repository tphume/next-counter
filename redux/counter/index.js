import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  reducers: {
    increment: state => state + 1
    decrement: state => state - 1
  },
})

export const { reducer, actions } = counterSlice