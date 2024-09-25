"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import ProjectsForm from './ProjectsForm'
import BlogsForm from './BlogsForm'

const Dashboard = () => {

  const [tab, setTab] = useState("projects")

  return (
    <div className='dashboard-wrapper min-h-[100vh] w-full flex justify-center items-start'>
      <div className="dashboard-inner w-[93%] pt-[25vh] pb-[10vh]">
        <TopBar tab={tab} setTab={setTab}/>
        
        { tab=="projects" && <ProjectsForm/> }
        { tab=="blogs" && <BlogsForm/> }
      </div>
    </div>
  )
}

const tabs = [
  {
    name:"Projects",
    value:"projects"
  },
  {
    name:"Blogs",
    value:"blogs"
  }
]

const TopBar = ({tab,setTab}) => {
  return (
    <div className="top-selection-bar pb-[5vh] mb-[5vh] w-full border-b-[0.1px] border-b-[var(--bor)] flex items-center justify-between">
      <div className="tab-toggle-wrapper flex gap-[20px]">
        {
          tabs.map((elem,idx) => 
            <button 
             className={`py-[5px] px-[15px] rounded-[20px] ${elem.value == tab ? "bg-yellow": "bg-[#363636]"} transition-all duration-300 ease-in-out`}
             key={`tab_btn_${idx}`} 
             onClick={() => {setTab(elem.value)}}
             >
              <h2 className={`${elem.value == tab ? "text-black": "text-[#fff]"}`}>
                {elem.name}
              </h2>
            </button>
          )
        }
      </div>
      <div className='sign-out-button py-[5px] px-[15px] bg-[#363636] rounded-[20px]'>
        <button onClick={() => { signOut() }}>Sign Out</button>
      </div>
    </div>
  )
}

export default Dashboard
