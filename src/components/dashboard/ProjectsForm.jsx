"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the Zod schema with file validation
const formSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters." }),
    description: z.string().min(10, { message: "Description must be at least 10 characters." }),
    image: z
    .any()
    .refine((files) => files && files.length === 1, "Image is required")
    .refine((files) => files[0]?.size <= 5 * 1024 * 1024, "Image size must be less than 5MB")
    .refine(
      (files) => ["image/jpeg", "image/png", "image/gif"].includes(files[0]?.type),
      "Only .jpg, .png, or .gif formats are allowed"
    ),
});

const ProjectsForm = () => {
    const [apiResponse, setApiResponse] = useState(null);
  
    // initialize react hook form
    const { register,handleSubmit, formState: { errors, isSubmitting } } = useForm({
      resolver: zodResolver(formSchema),
    });
  
    // function to handle form submit
    const onSubmit = async (data) => {
    //   Prepare file for upload
      const file = data.image[0]; // First file from input

      // Perform the API request with the file and other form data
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", file);
      
      try {
        const response = await fetch("/api/projects", {
          method: "POST",
          body: formData,
        });
  
        const result = await response.json();
        console.log(result.data)
        setApiResponse(result.message);
      } 
      catch (error) {
        setApiResponse("Failed to submit form");
        console.log(error)
      }
    };
  
    return (
      <div className='projects-form-wrap w-full flex items-start justify-start'>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="projects-form flex flex-col items-start gap-[40px]"
        >
          <div className="inputs-wrap flex flex-col gap-[30px]">
            <group className="group flex flex-col">
              <label className="uppercase text-[#ffffffd0]">title</label>
              <input
                {...register("title")}
                name="title"
                id="title"
                className="bg-transparent py-[10px] w-[50vw] tab:w-[40vw] mob:w-[93vw] outline-none border-t-[0px] border-b-[1px] border-b-[var(--bor)]"
              />
              {errors.title && (
                <p className="text-yellow font-[900] mt-[10px]">
                  {errors.title.message}
                </p>
              )}
            </group>
            <group className="group flex flex-col gap-[10px]">
              <label className="uppercase text-[#ffffffd0]">Description</label>
              <textarea
                {...register("description")}
                className="form-text-area bg-transparent w-[50vw] tab:w-[40vw] mob:w-[93vw] h-[60px] outline-none border-t-[0px] border-b-[1px] border-b-[var(--bor)]"
                id="description"
                name="description"
              ></textarea>
              {errors.description && (
                <p className="text-yellow font-[900]">{errors.description.message}</p>
              )}
            </group>
            <group className="group flex flex-col">
              <label className="uppercase text-[#ffffffd0]">Image</label>
              <input
                {...register("image")}
                id={`image`}
                name={`image`}
                type='file'
                className="bg-transparent py-[10px] w-[50vw] tab:w-[40vw] mob:w-[93vw] outline-none border-t-[0px] border-b-[1px] border-b-[var(--bor)]"
              />
              {errors.image && (
                <p className="text-yellow font-[900] mt-[10px]">
                  {errors.image.message}
                </p>
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
                  {isSubmitting?"Loading...":"Submit Project"}
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
      </div>
    );
};
  

export default ProjectsForm
