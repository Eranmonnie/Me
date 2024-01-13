import Profile from "../components/Profile";
import { useParams } from "react-router-dom";
import { works } from "../works";

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
          </div>
        );
      })}
    </>
  );
};

export default Details;
