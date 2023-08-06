import { createSlice } from '@reduxjs/toolkit'

export interface IIntialState {
  user: {} | null
  accessToken: string
  loading: boolean
}

const initialState: IIntialState = {
  user: null,
  accessToken: '',
  loading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },

    login: (state, action) => {
      state.user = action.payload.user
      state.loading = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLoading, login } = userSlice.actions

export default userSlice.reducer
