

const ClientDetais = () => {
  return (
    <>
      <div className="flex flex-col text-lg">
        <div className="flex py-10 border-y-2">
          <h3 className="mr-auto">Client</h3>
          <h3>Richard Okoye</h3>
        </div>

        <div className="flex py-10 border-b-2 ">
          <h3 className="mr-auto">Year</h3>
          <h3>2022</h3>
        </div>

        <div className="flex py-10 border-b-2 gap-24 mb-32">
          <h3 className="mr-auto">Servies</h3>
          <h3 className="text-right">Art direction, Web design, Interaction design</h3>
        </div>
      </div>

    </>
  );
};

export default ClientDetais;
