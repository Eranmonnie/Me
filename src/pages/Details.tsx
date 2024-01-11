import Profile from "../components/Profile";
const Details = () => {
    
  return (
   <>
   <div className=' pb-20 mt-10 text-4xl font-inter-tight-bold uppercase lg:text-8xl flex flex-col lg:flex-row lg:justify-between'>
    <h1>cuso</h1>
    <h1>(2020)</h1>
   </div>

   <div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0'>
    <h4 className='text-xl lg:text-left lg:text-4xl lg:w-[50%] font-inter-tight-regular '>Ecommerse website for the smartbox cuso</h4>
    <h4 className='text-xl lg:text-right lg:text-4xl lg:w-[50%] font-inter-tight-regular '>Discover</h4>
   </div>

    <Profile/>
   </>
  )
}

export default Details