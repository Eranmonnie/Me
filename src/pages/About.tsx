import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import Works from '../components/Works'
import Question from '../components/Question'

const About = () => {
  return (
    <>
    <Banner first={`software `} second={`and piano`} align={true} />
    <Hero
        message={`Get to know more about my approach, process, services and way of working. See some of my skateboard tricks as well while you're at it.`}
      />
      <div className="mt-28">
      <Works name={false} year={false} />
      </div>
      
      <Question
        one={`The best results come from websites that are easy to use, show the user what they want to see and delight them. By analysing your current situation and defining your business goals we’ll design a website that is not only beautiful but also converts. `}
        two={false}
        button={false}
      />
     
    </>
  )
}

export default About