"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(5, "Message should have minimum 5 characters"),
});

const FormComponent = () => {
  const [apiResponse, setApiResponse] = useState(null);

  // initialize react hook form
  const { register,handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(formSchema),
  });

  // function to handle form submit
  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contactformsubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result.data)
      setApiResponse(result.message);
    } catch (error) {
      setApiResponse("Failed to submit form");
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form flex flex-col items-start gap-[40px]"
      >
        <div className="inputs-wrap flex flex-col gap-[30px]">
          <group className="group flex flex-col">
            <label className="uppercase text-[#ffffffd0]">name</label>
            <input
              {...register("name")}
              id="name"
              className="bg-transparent py-[10px] w-[450px] tab:w-[40vw] mob:w-[93vw] outline-none border-t-[0px] border-b-[1px] border-b-[var(--bor)]"
            />
            {errors.name && (
              <p className="text-yellow font-[900] mt-[10px]">
                {errors.name.message}
              </p>
            )}
          </group>
          <group className="group flex flex-col">
            <label className="uppercase text-[#ffffffd0]">email</label>
            <input
              {...register("email")}
              id={`email`}
              className="bg-transparent py-[10px] w-[450px] tab:w-[40vw] mob:w-[93vw] outline-none border-t-[0px] border-b-[1px] border-b-[var(--bor)]"
            />
            {errors.email && (
              <p className="text-yellow font-[900] mt-[10px]">
                {errors.email.message}
              </p>
            )}
          </group>
          <group className="group flex flex-col gap-[10px]">
            <label className="uppercase text-[#ffffffd0]">Your Message</label>
            <textarea
              {...register("message")}
              className="form-text-area bg-transparent w-[450px] tab:w-[40vw] mob:w-[93vw] h-[100px] outline-none border-t-[0px] border-b-[1px] border-b-[var(--bor)]"
              id="message"
            ></textarea>
            {errors.message && (
              <p className="text-yellow font-[900]">{errors.message.message}</p>
            )}
          </group>
        </div>
        <button disabled={isSubmitting ? true : false} type="submit">
          <motion.div
            initial={"init"}
            whileHover={"hover"}
            className={`rounded-full border-[0.5px] border-[var(--bor)] bg-yellow flex items-center justify-between gap-[15px] px-[10px] pl-[20px] py-[5px]`}
          >
            <div className="text-wrap">
              <h2 className="text-black font-[600]">
                {isSubmitting?"Loading...":"Submit Inquiry"}
              </h2>
            </div>
            <div className="circle bg-white w-[50px] h-[50px] rounded-full">
              <div className="circle-inner relative rotate-[-40deg] rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                <motion.div
                  variants={{
                    init: {
                      scale: 1,
                    },
                    hover: {
                      scale: 0,
                    },
                  }}
                  className="circle-overlay relative h-full w-full bg-black rounded-full scale-1"
                ></motion.div>

                <motion.img
                  variants={{
                    init: {
                      left: "50%",
                    },
                    hover: {
                      left: "150%",
                      transition: {
                        left: {
                          type: "spring",
                        },
                      },
                      // transition:{type:"spring"}
                    },
                  }}
                  src={"./assets/arrow2.png"}
                  alt=""
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px]"
                  style={{ filter: "invert(1)" }}
                />

                <motion.img
                  variants={{
                    init: {
                      left: "-50%",
                    },
                    hover: {
                      left: "50%",
                      transition: {
                        left: {
                          type: "spring",
                        },
                      },
                      transform: "translateX(-50%) translateY(-50%)",
                    },
                  }}
                  src={"./assets/arrow2.png"}
                  alt=""
                  className="absolute -left-1/2 top-1/2 -translate-y-1/2 w-[20px] h-[20px]"
                  style={{ filter: "invert(0)" }}
                />
              </div>
            </div>
          </motion.div>
        </button>
      </form>
      {apiResponse && <p>{apiResponse}</p>}
    </>
  );
};

export default FormComponent;
