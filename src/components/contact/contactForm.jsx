import React, { useState } from 'react'
import Button from '../button/button'
import { motion } from 'framer-motion'
// W w A a D d Q q'

const ContactForm = () => {
  return (
    <div className='contact-form-wrap w-full relative z-[35] rounded-b-[20px] bg-black flex justify-center'>
      <div className="contact-form-inner w-[93%] flex mob:flex-col justify-between items-start border-t-[1px] border-t-[var(--bor)] py-[10vh] tab:py-[6vh] mob:py-[5vh] mob:pb-[10vh] mob:gap-[10vw]">
        <div className="left w-1/2 tab:w-[40%] mob:w-full">
            <p className='text-[#ffffff] text-[2.2vw] tab:text-[2.5vw] mob:text-[20px] w-[80%] mob:w-full'>
                We would love to respond you. Feel free to get touch in touch with us.
            </p>
        </div>
        <div className="right-form w-1/2 tab:w-[55%] mob:w-full">
            <Form/>
        </div>
      </div>
    </div>
  )
}

const inputs = [
    {
        name:"Your Name",
        type:"text",
        id:"name"
    },
    {
        name:"Email address",
        type:"email",
        id:"email"
    },
]

const Form = () => {

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const [value, setValue] = useState("")

    return (
        <form action='' onSubmit={handleSubmit} className='contact-form flex flex-col items-start gap-[40px]'>
            <div className="inputs-wrap flex flex-col gap-[30px]">
                {
                    inputs.map((input,i)=>{
                        return <Input name={input.name} key={`Input_${i}`} type={input.type} id={input.id}/>
                    })
                }
                <group className="group flex flex-col gap-[10px]">
                    <label className='uppercase text-[#ffffffd0]'>
                        Your Message
                    </label> 
                    <textarea
                     required
                     value={value}
                     onChange={handleChange}
                     className='form-text-area bg-transparent w-[450px] tab:w-[40vw] mob:w-[93vw] h-[100px] outline-none border-t-[0px] border-b-[1px] border-b-[var(--bor)]' name="form-field-message" id="form-field-message"></textarea> 
                </group>
            </div>
            <button type="submit">
                <motion.div
                initial={'init'}
                whileHover={'hover'}
                className='rounded-full border-[0.5px] border-[var(--bor)] bg-yellow flex items-center justify-between gap-[15px] px-[10px] pl-[20px] py-[5px]'>
                    <div className="text-wrap">
                        <h2 className='text-black font-[600]'>
                            Submit inquiry
                        </h2>
                    </div>
                    <div className="circle bg-white w-[50px] h-[50px] rounded-full">
                        <div className="circle-inner relative rotate-[-40deg] rounded-full w-full h-full flex items-center justify-center overflow-hidden">

                            <motion.div 
                            variants={{
                                init:{
                                    scale: 1,
                                },
                                hover:{
                                    scale: 0,
                                }
                            }}
                            className="circle-overlay relative h-full w-full bg-black rounded-full scale-1">
                            </motion.div>

                            <motion.img
                            variants={{
                                init:{
                                    left:"50%",
                                },
                                hover:{
                                    left:"150%",
                                    transition:{left:{
                                        type:"spring",

                                    }},
                                    // transition:{type:"spring"}
                                }
                            }}
                            src={'./assets/arrow2.png'} alt="" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px]' style={{filter:"invert(1)"}} />

                            <motion.img 
                            variants={{
                                init:{
                                    left:"-50%",

                                },
                                hover:{
                                    left:"50%",
                                    transition:{left:{
                                        type:"spring"
                                    }},
                                    transform:"translateX(-50%) translateY(-50%)",
                                }
                            }}
                            src={'./assets/arrow2.png'} alt="" className='absolute -left-1/2 top-1/2 -translate-y-1/2 w-[20px] h-[20px]' style={{filter:"invert(0)"}} />

                        </div>
                    </div>
                </motion.div>
            </button>
        </form>
    )
}

const Input = ({name, key, type, id}) => {
    
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    return (
        <group key={key} className="group flex flex-col">
            <label className='uppercase text-[#ffffffd0]'>
                {name}
            </label>
            <input
             type={type}
             required
             id={`form-field-${id}`}
             className='bg-transparent py-[10px] w-[450px] tab:w-[40vw] mob:w-[93vw] outline-none border-t-[0px] border-b-[1px] border-b-[var(--bor)]' value={value} onChange={handleChange}/>
        </group>
    )
}


export default ContactForm
