import Profile from "../components/Profile";
import { useParams } from "react-router-dom";
import { works } from "../works";
import ClientDetais from "../components/ClientDetais";
import Footer from "../components/Footer";


interface work {
  id: number;
  image: string;
  name: string;
  data: string;
  year: string;
}

const Details = () => {
  const { id } = useParams();
  const numid: number | undefined = id ? parseInt(id, 10) : undefined;
  4;
  let data: work[] = [];

  if (numid !== undefined) {
    data = works.filter((work) => work.id === numid);
  } else {
    console.error("Invalid id in the URL");
    //end up redirecting to home page
  }

  return (
    <>
      {data.map((data) => {
        return (
          <div>
            <div className=" pb-20 mt-10 text-4xl font-inter-tight-bold uppercase lg:text-8xl flex flex-col lg:flex-row lg:justify-between">
              <h1>{data.name}</h1>
              <h1>{`(${data.year})`}</h1>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
              <h4 className="text-xl lg:text-left lg:text-4xl lg:w-[50%] font-inter-tight-regular ">
                {data.data}
              </h4>
              <h4 className="text-xl lg:text-right lg:text-4xl lg:w-[50%] font-inter-tight-regular ">
                Discover
              </h4>
            </div>

            <Profile image={data.image} />

            <div className="flex flex-col gap-3 pt-10 lg:flex-row lg:gap-[22%] ">
              <h2 className="text-xl text-left lg:text-xl font-inter-tight-regular">
                (002)
              </h2>
              <div className="lg:w-[55%]">
                <h2 className="text-2xl text-left lg:text-3xl font-inter-tight-regular">
                  Richard wanted to be seen more as a creative developer to
                  attract more of creative development work. I helped him with
                  the art direction and design on this project. The result is a
                  solid portfolio website with a lot of unique personal touches.
                </h2>

                <a href="#" className="">
                  <h3 className="mt-20 mb-10">view website live version</h3>
                </a>
                <ClientDetais />
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default Details;
