"use client"
import React from 'react'
import animatePageOut from '../hooks/animatePageOut'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const TransitionLink = ({children, href, router, key, className}) => {

  const pth = usePathname();

  const click = (e) => {
    e.preventDefault()
    animatePageOut(href,router,pth)
  }

  return (
    <Link href={`${href}`} key={key} onClick={click} className={className}>
      {children}
    </Link>
  )
}

export default TransitionLink
