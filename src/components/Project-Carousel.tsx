
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, HashIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { works } from "../works";


export const ProjectCarousel = () => {
  return (
    <div className="w-full p-10 ">
      <div className="flex items-center justify-between mb-10 md:mb-20">
        <h2 className="text-4xl lg:text-6xl font-bold text-[#f8f7f8]">Projects</h2>
      </div>

      <Carousel className="w-full mb-10">
        <CarouselContent>
          {
            works.map((work) => {
              return (
                <CarouselItem>
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 " id={String(work.id)}>

                    <img
                      src="https://res.cloudinary.com/djtlzuxfa/image/upload/v1703443457/Screenshot_147_ghd6mh.png"
                      alt="Project 1"
                      width={600}
                      height={400}
                      className="rounded-lg w-full md:w-1/2 object-cover bg-[#1F1F29] p-10"
                    />

                    <div className="flex-1  space-y-2 text-[#f8f7f8]">
                      <h3 className="text-xl md:text-2xl font-semibold">Project {String(work.id)}: {work.name}</h3>
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

