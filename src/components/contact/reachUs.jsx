import React from 'react'
// W w A a D d Q q'

const Reach_Us = () => {
  return (
    <div className='reach-us-wrap relative z-[30] rounded-b-[20px] -mt-[5vh] tab:-mt-[7vh] mob:-mt-[7vh] py-[10vh] tab:py-[7vh] mob:py-[7vh] pt-[15vh] tab:pt-[14vh] mob:pt-[14vh]  bg-white w-full flex justify-center items-center'>
      <div className='reach-us-inner w-[93%] flex mob:flex-col items-start justify-between mob:gap-[8vw]'>
        <Left/>
        <Right/>
      </div>
    </div>
  )
}

const Left = () => {
  return (
    <div className="reach-us-left w-[65%] mob:w-full">
      <p className='text-black text-[2.4vw] mob:text-[20px] w-[80%] mob:w-full inline-block'>
        If you have any questions, please drop us a line at <a href='mailto:info@bitspieces.org' className='text-black para-link text-[2.4vw] tab:text-[2.6vw] mob:text-[20px]'>info@bitspieces.org,</a> give us a call or better yet, come visit us in the store!
      </p>
    </div>
  )
}

const emails = [
  {
    v:"info@bitspieces.org",
  },
  {
    v:"bits.pieces.events@gmail.com",
  },
  {
    v:"bitspiecesevent.printing@gmail.com"
  }
]

const phones = [
  "+971503225804","+971503225804","+971508346810"
]


const Right = () => {
  return (
    <div className="reach-us-right w-[30%] mob:w-full flex mob:flex-col items-start justify-end gap-[4vw] tab:gap-[5vw] mob:gap-[8vw]">
      <div className="email flex flex-col items-start justify-between gap-[5px]">
        <h2 className='text-[#12121298] uppercase tab:text-[16px]'>
          Email
        </h2>
        <div className="line w-full mt-[5px] mb-[10px] h-[1px] bg-[#12121280]"/>
        {
          emails.map((elem,i)=>{
            return (
              <a key={i} href={`mailto:${elem.v}`} className='text-black email-link text-[16px] tab:text-[15px] mob:text-[17px]'>
                {elem.v}
              </a>
            )
          })
        }
      </div>
      <div className="phone flex flex-col items-start justify-between gap-[5px]">
        <h2 className='text-[#12121298] uppercase tab:text-[16px]'>
          Phone
        </h2>
        <div className="line w-full h-[1px] mt-[5px] mb-[10px] bg-[#12121280]"/>
        {
          phones.map((elem,i)=>{
            return (
              <a key={i} href={`tel:${elem}`} target="_blank" className='text-black phone-link text-[16px] tab:text-[15px] mob:text-[17px]'>
                {elem}
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Reach_Us
