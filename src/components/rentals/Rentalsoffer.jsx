import React from 'react'
import Card from './card'
import Pin from '../pin/pin'

const Rentalsoffer = () => {
    return (
        <div className="rental-offer-wrapper bg-black relative z-[30] rounded-b-[15px] pt-[35vh] tab:pt-[30vh] pb-[20vh] tab:pb-[10vh] mob:pb-[10vh] w-full flex flex-col items-center">
            <div className="rental-offer-inner w-[93%] flex flex-col items-center justify-center">
                <RentalUpperText/>
                <RentalOfferLower/>
            </div>
        </div>
    )
}

const RentalUpperText = () => {
    return (
        <Pin trigger={"#main"} endTrigger={".offers-wrap"} start={"top top"} end={"top top"} move={true}>
            <div className="rental-upper-text w-full pb-[7vh] tab:pb-[5vh] mob:pb-[5vh]">
                <h1 className='text-[5vw] mob:text-[8vw] uppercase tracking-[0px] font-[mon] leading-[1.1em] mob:leading-[1.2em]'>
                    Rentals for an eco friendly event
                </h1>
            </div>
        </Pin>
    )
}

const RentalOfferLower = () => {

    const cards = [
        {
            value1: "Choose Your Desired Items",
            value2:"Explore our extensive collection of high-quality event furniture and props. Select the perfect pieces to match your event's theme and style, ensuring a memorable and visually stunning experience.",
            style:{
                alignSelf:"end",
                 backgroundColor:"var(--sli)"
            },
            flag:false,
        },
        {
            value1: "Pick Your Event Date",
            value2:"Specify the date of your event to check the availability of your chosen items. We’ll ensure everything is reserved and prepared for your special occasion, making the planning process seamless and stress-free.",
            style:{
                backgroundColor:"var(--purp)"
            },
            flag:true
        },
        {
            value1: "We Deliver Your Items",
            value2:"Sit back and relax as we handle the logistics. Our team will deliver your selected items to your event location on time, ensuring everything is set up to perfection, so you can focus on enjoying the moment.",
            style:{
                 backgroundColor:"#F1F1F1"
            },
            flag:true
        },
        {
            value1: "Expert Installation",
            value2:"Our skilled team will handle the setup and installation of all rented items, ensuring a flawless presentation. We take care of every detail so you can focus on hosting your event.",
            style:{
                 backgroundColor:"#04443c"
            },
            flag:false
        }
    ]
    
    return (
        <div className="offers-wrap bg-black relative pt-[7vh] tab:pt-[5vh] mob:pt-[5vh] border-t-[0.1px] border-t-[var(--bor)] w-full flex mob:flex-col items-start justify-between mob:gap-[10vw]">
            <div className="left w-[30%] mob:w-full">
                <p className='text-[17px] tab:text-[14px]'>
                    What you can expect:
                </p>
            </div>
            <div className="right flex justify-end items-start flex-wrap gap-x-[25px] mob:gap-x-[30px] gap-y-[25px] mob:gap-y-[30px]">
                {
                    cards.map((elem, i) => {
                        return <Card value1={elem.value1} style={elem.style} value2={elem.value2} num={i+1} keyrefer={`offer_card_${i+1}`} key={i} flag={elem.flag}/>
                    })
                }
            </div>
        </div>
    )
}

export default Rentalsoffer
