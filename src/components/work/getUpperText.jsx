import React from 'react'
import { className, findGallery, texts } from '../hooks/data'

const GetUpperText = ({service}) => {

  let text = service == "All" ? <h1 className={className}>Client Projects:<br/>Bringing Vision to Life</h1> : texts[findGallery.indexOf(service)]
  
  return (
    <div className="upper-text w-full">
      {text}
    </div>
  )
}

export default GetUpperText
