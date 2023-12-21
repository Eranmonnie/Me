import React from 'react'

const Solution = ({heading,data}) => {
  return (
   <>
   <div className="flex flex-col gap-8 mb-20">
        <h3 className="text-lg">
            {heading}
        </h3>

        <p className="text-lg">
            {data}
        </p>
   </div>
   </>
  )
}

export default Solution