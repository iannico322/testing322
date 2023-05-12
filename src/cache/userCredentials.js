import { createSlice } from '@reduxjs/toolkit'

export const userCredentials = createSlice({
  name: 'account',
  initialState: {
    value:{
      "email":"asdasd",
      "name":"asd",
      "position": "asd",
      "password": "asdasd",
    }
  
  },
  reducers: {
    logout: (state) => {
      state.value = {
        "email":"",
        "name":"",
        "position": "",
        "password": "",
      }
    },
    addCredentials: (state, action) => {
      state.value = (action.payload)
    },
  },
})

export const { logout, addCredentials } = userCredentials.actions
export const usersCache = (state) => state.account.value

export default userCredentials.reducer


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