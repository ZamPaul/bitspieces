import FooterTest from '@/components/footer/footerTest'
import Marquee from '@/components/home/marquee'
import Policies from '@/components/privacy-policy/policies'
import PrivacyIntroText from '@/components/privacy-policy/privacyIntroText'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
    <div className='terms-condition-wrap relative z-[30] w-full flex pt-[35vh] tab:pt-[30vh] pb-[10vh] justify-center bg-white'>
      <div className="terms-condtion-inner w-[93%] flex flex-col">
        <PrivacyIntroText/>
        <Policies/>
      </div>
    </div>
    <div className='bg-[#F1F1F1]'>
      <Marquee/>
      <FooterTest/>
    </div>
    </>
   
  )
}

export default PrivacyPolicy
