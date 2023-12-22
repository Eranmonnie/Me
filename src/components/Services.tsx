import React from 'react'

const Services = ({data}) => {
  return (
    <>
    <div className="mt-10 mb-10">
        <div className="lg:flex lg:flex-row lg:gap-[15%] lg:py-20 lg:justify-center ">
          <h3 className="hidden lg:inline ">01.</h3>
          <div className="text-3xl m">
            <div className="mb-5">
            <p>Information </p><p> Architecture</p>
            </div>
         
          </div>
          

          <div className="lg:w-[50%] lg:ml-auto">
            
            <p className="text-lg lg:w-[75%]">{data}</p>
          </div>
        </div>
      </div>
      <hr />
      </>
  )
}

export default Services