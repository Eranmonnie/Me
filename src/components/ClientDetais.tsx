import React from "react";

const ClientDetais = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex py-10 border-y-2">
          <h3 className="mr-auto">Client</h3>
          <h3>Richard Okoye</h3>
        </div>

        <div className="flex py-10 border-b-2 ">
          <h3 className="mr-auto">Year</h3>
          <h3>2022</h3>
        </div>

        <div className="flex py-10 border-b-2 ">
          <h3 className="mr-auto">Servies</h3>
          <h3>Art direction, Web design, Interaction design</h3>
        </div>
      </div>
    </>
  );
};

export default ClientDetais;
