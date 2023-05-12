import { createSlice } from '@reduxjs/toolkit'
export const screenDisplay = createSlice({
  name: 'navbar',
  initialState: {
    value: "Dashboard"
  
  },
  reducers: {
    logout: (state) => {
      state.value = ""
    },
    changeNav: (state, action) => {
      state.value = (action.payload)
    },
  },
})

export const { logout, changeNav } = screenDisplay.actions
export const navCache = (state) => state.navbar.value

export default screenDisplay.reducer


//Adding value
//import { usersCache,logout,addCredentials } from '../../../cache/userCredentials'
// import { useSelector,useDispatch } from 'react-redux'
//
// const dispatch = useDispatch()
// dispatch(addCredentials( {
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