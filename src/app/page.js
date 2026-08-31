import React from 'react'

const Page = () => {
  return (
    <div>
      <div className=" flex h-14.75 w-360 justify-between items-center P-4 border border-black" >
        <div className=' flex ml-10 gap-5'>
          <img src='film.png'
          />
          <input
            type='text'
            placeholder='search...'
            className=" border-gray-500 rounded-5       "

          />
          <Dooshoo />
        </div>
      </div>ed
    </div>
  )
}
export default Page;