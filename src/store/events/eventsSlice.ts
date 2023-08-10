import { createSlice } from '@reduxjs/toolkit'
import { Events } from '~/models/Events'

export interface IIntialState {
  events: Events
  loading: boolean
}

const initialState: IIntialState = {
  events: [],
  loading: false
}

export const eventsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },

    login: (state, action) => {
      state.events = action.payload.events
      state.loading = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLoading, login } = eventsSlice.actions

export default eventsSlice.reducer
