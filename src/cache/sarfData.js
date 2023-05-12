import { createSlice } from '@reduxjs/toolkit'

export const sarfData = createSlice({
  name: 'sarf',
  initialState: {
    value:[{
        organization:"SITE",
        name:"Thanos",
        eventName:"Infinity War",
        eventType:"War",
        date:"2023/21/2",
        SObjectives:"ambot",
        GObjective:"ambot g",
        Particapance:"100",
        duration:"6",
        startTime:"12:00pm",
        endTime:"2:00pm",
        venue:"New York",
        ammount:"0"
    }]


  
  },
  reducers: {
    clear: (state) => {
      state.value = [{
        organization:"SITE",
        name:"Thanos",
        eventName:"Infinity War",
        eventType:"War",
        date:"2023/21/2",
        SObjectives:"ambot",
        GObjective:"ambot g",
        Particapance:"100",
        duration:"6",
        startTime:"12:00pm",
        endTime:"2:00pm",
        venue:"New York",
        ammount:"0"
    }]
    },
    addSarfData: (state, action) => {
      state.value = ([...state.value, action.payload]) 
    },
  },
})

export const { clear, addSarfData } = sarfData.actions
export const sarfCache = (state) => state.sarf.value

export default sarfData.reducer


//Adding value
//import { usersCache,clear,addSarfData } from '../../../cache/userCredentials'
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
// dispatch(clear())