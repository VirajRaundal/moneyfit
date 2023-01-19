import React from 'react'
import { createContext, useState } from 'react'

export const APIcontext = createContext(null);

export const APIcontextProvider = ({children}) => {
  
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);

  const fetchAPI = () => {
    setLoad(true);
    fetch("")
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
        setLoad(false);
      })
  }

  const value = {
    data,
    load,
    fetchAPI,
  };

  return (
    <APIcontext.Provider value={value}> {children} </APIcontext.Provider>
  )
}

export default APIcontext