import React from 'react'

const SingleBlogPage = ({params}) => {
  return (
    <div className='w-screen h-screen bg-black'> 
      <h2>
        {params.slug}
      </h2>
    </div>
  )
}

export default SingleBlogPage
