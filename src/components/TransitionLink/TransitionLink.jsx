import React, { forwardRef, useEffect } from 'react'
import animatePageOut from '../hooks/animatePageOut'
import { usePathname } from 'next/navigation'

const TransitionLink = ({children, href, router, key, className}) => {

  const pth = usePathname();

  const click = () => {
    animatePageOut(href,router,pth)
  }

  return (
    <button key={key} onClick={click} className={className}>
      {children}
    </button>
  )
}
export default TransitionLink
