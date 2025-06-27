import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {
    const ref = useRef(null)


  const data = [
    {
      desc: "Shivani is a very good coder",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagtitle: "Download Now",
        tagcolor: "green"
      }
    },
    {
      desc: "She builds UI like a pro!",
      filesize: "1.2mb",
      close: false,
      tag: {
        isopen: true,
        tagtitle: "Explore",
        tagcolor: "blue"
      }
    },
    {
      desc: "Working with React components",
      filesize: "2.1mb",
      close: true,
      tag: {
        isopen: false,
        tagtitle: "Closed",
        tagcolor: "gray"
      }
    }
  ]

  return (
    <div>
      <div ref ={ref} className='fixed top-0 left-0 z-[3] h-full w-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card key={index} data={item} reference ={ref} />
        ))}
      </div>
    </div>
  )
}

export default Foreground
