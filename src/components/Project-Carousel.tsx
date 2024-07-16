
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowRightIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { works } from "../works";


export const ProjectCarousel = () => {
  return (
    <div className="w-full p-5 md:p-10 h-full">
      <div className="flex items-center justify-between mb-10 ">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#f8f7f8]">Projects</h2>
      </div>

      <Carousel className="w-full mb-10">
        <CarouselContent>
          {
            works.map((work) => {
              return (
                <CarouselItem>
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 " id={String(work.id)}>

                    <img
                      src={work.image}
                      alt="Project 1"
                      width={600}
                      height={400}
                      className="rounded-lg w-full md:w-1/2 object-cover bg-[#1F1F29] p-5"
                    />

                    <div className="flex-1  space-y-2 text-[#f8f7f8]">
                      <h3 className="text-xl md:text-2xl font-semibold"> {work.name}</h3>
                      <p className="">
                        {work.data}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-black">
                        {
                          work.languages.map((lang) => {
                            return (

                              <div className="flex items-center  bg-muted px-3 py-1 rounded-md">

                                <span className="text-xs font-medium">{lang}</span>
                              </div>
                            )
                          })

                        }
                      </div>
                      <div className="flex gap-7">

                        <Link
                          to="#"
                          className="inline-flex items-center gap-2 font-medium text-[#f8f7f8] hover:text-rose-500"
                        >
                          Live
                          <ArrowRightIcon className="w-4 h-4" />

                        </Link>
                        <Link
                          to="#"
                          className="inline-flex items-center gap-2 font-medium text-[#f8f7f8] hover:text-rose-500"
                        >
                          Github
                          <ArrowRightIcon className="w-4 h-4" />

                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })
          }

        </CarouselContent>

        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}

