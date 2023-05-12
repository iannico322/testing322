import { useEffect, useState } from 'react'

const useDebounce = (value,delay) =>{
    const [queryValue,setQueryValue] = useState(value)
    useEffect(()=>{
      const timeoutId = setTimeout(()=>{
        setQueryValue(value)
      },[delay])
      
      return ()=>clearTimeout(timeoutId)
    },[value])
  
    return queryValue
  }

export default useDebounce
//this code use for the delay in query

