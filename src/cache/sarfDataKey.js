import { createSlice } from '@reduxjs/toolkit'

export const sarfDataKey = createSlice({
  name: 'sarfkey',
  initialState: {
    value:0


  
  },
  reducers: {
    logout: (state) => {
      state.value = []
    },
    setSarfKey: (state, action) => {
      state.value = (action.payload)
    },
  },
})

export const { logout, setSarfKey } = sarfDataKey.actions
export const sarfKeyCache = (state) => state.sarfkey.value

export default sarfDataKey.reducer


//Adding value
//import { usersCache,logout,addSarfData } from '../../../cache/userCredentials'
// import { useSelector,useDispatch } from 'react-redux'
//
// const dispatch = useDispatch()
// dispatch(addSarfData( {
//   "email":"officer@gmail.com",
//   "name":"LadyMaxine Sarsalejo",
//   "position": "Academic Unit Organization Officer",
//   "password": "123",
// }))

// Using value
// const credentials = useSelector(usersCache)
//{credentials.name}


//Removing Value
// dispatch(logout())