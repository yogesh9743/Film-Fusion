import { configureStore } from '@reduxjs/toolkit'
import configSlice from '../Slices/configSlice'

export const store = configureStore({
  reducer: {
    configuration: configSlice,

  },
})