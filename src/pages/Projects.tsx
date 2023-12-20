import React from 'react'
import Works from '../components/Works'
import Question from '../components/Question'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const Projects = () => {
  return (
    <>
     <Banner first={`selected works`} second={`(2020-2023)`} />
     <div className="mb-24">
     <Hero message={`Have a look at some of the projects I’ve worked on. Clients vary from lifestyle to tech and design companies.`}/>
     </div>
      <Works name ={`Nerflix`} year={`2023`} />
      <Works name ={`Laracast`} year={`2023`} />
      <Works name ={`Worddle clone`} year={`2023`} />
      <Works name ={`custo`} year={`2020`} />
      <Question  one={`Looking to grow your business through the power of great digital design?`} two={`Reach out to get the conversation started about your digital design needs.`}/>

      
    </>
  )
}

export default Projects