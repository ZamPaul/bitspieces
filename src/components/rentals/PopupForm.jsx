import React from 'react'
import Button from '../button/button'
import WhatsappButton from './WhatsappButton'

const PopupForm = () => {
  return (
    <div className="right-contact-form flex flex-col w-full justify-start items-start">
        <p className='text-[1.5vw] w-[65%] text-black leading-[1.5em]'>
          Need more info? Fill out our <span className="text-black para-link-black">Contact</span> Form or contact us directly on <span className="text-black para-link-black">Whatsapp</span>.
        </p>
        <div className="buttons mt-[2vw] flex gap-[1vw]">
            <Button value={"Fill Form"} href={"/contact"}/>
            <WhatsappButton/>
        </div>
    </div>
  )
}

export default PopupForm
