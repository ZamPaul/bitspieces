"use client"
import { usePathname } from 'next/navigation';
import React, { createContext, useEffect, useLayoutEffect, useState } from 'react'


export const LoadContext = createContext();

const LoadContextProvider = ({children}) => {

  const [firstLoad, setFirstLoad] = useState(true)
  const [heroGraphicDelay, setHeroGraphicDelay] = useState(2.7)

  return (
    <LoadContext.Provider value={ {firstLoad, setFirstLoad, heroGraphicDelay, setHeroGraphicDelay} } >
      {children}
    </LoadContext.Provider>
  )
}

export default LoadContextProvider
