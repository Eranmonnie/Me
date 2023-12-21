import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import Question from '../components/Question'
import Solution from '../components/Solution'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <Banner first={`software `} second={`and piano`} align={true} />
    <Hero
        message={`Get to know more about my approach, process, services and way of working. See some of my skateboard tricks as well while you're at it.`}
      />
      <div className="mt-28">
      <Profile />
      </div>
      
      <Question
        one={`The best results come from websites that are easy to use, show the user what they want to see and delight them. By analysing your current situation and defining your business goals we’ll design a website that is not only beautiful but also converts. `}
        two={false}
        button={false}
      />

     <Solution heading={`Defining the business goal and `} data={`Everything starts by getting clarity around what we are trying to achieve. What should the website’s main goal be? What does project succes mean for your business? Where will the business be in 3 years? These are just some questions which we’ll work together on to define the best path forward when it comes to your digital needs.`} />
     <Solution  heading={`Strategic visual design and art direction.`} data={`The visual language of the website will define how the visitor connects with the product or service. Knowing who the target audience is and what everybody else is doing in the field is crucial to get the best result from the website we’ll create together.`}/>
     <Footer />
    </>
  )
}

export default About