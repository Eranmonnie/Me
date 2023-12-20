import React from 'react'

const Banner = ({first, second}) => {
  return (
    <>
    <div className="flex flex-col mt-5 lg:mt-20">
        <h1 className="text-4xl font-inter-tight-bold uppercase lg:text-8xl">
          {first}
        </h1>
        <h1 className="text-4xl font-inter-tight-bold uppercase lg:text-8xl">
          {second}
        </h1>
      </div>
    </>
  )
}

export default Banner