import React from 'react'

async function getBlogData(){
  const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=1f984acffc4048cf8a1dc0fdb80f68ff")
  const data = await res.json();
  return data.articles;
}

const Blog = async () => {

  const articles = await getBlogData();

  return (
    <div className='blog-page w-full bg-black'>
      {
        articles.map((elem,i)=>{
          return (
            <h2 key={i}>
              {elem.author}
            </h2>
          )
        })
      }
    </div>
  )
}

export default Blog
