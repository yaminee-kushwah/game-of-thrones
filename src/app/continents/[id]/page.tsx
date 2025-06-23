const ContinentDetailPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://thronesapi.com/api/v2/Continents/${params.id}`
  );
  const data = await res.json();
  console.log("Data : ", data);
  return (
    <>
      <div className="bg-white shadow-sm border border-gray-200 p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-14">
        <div className="aspect-[3/2]">
          <img
            src="https://thronesapi.com/assets/images/catelyn-stark.jpg"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-bold"> {data.name}</h3>
          <p className="text-gray-600 text-sm">Continent ID: {data.id}</p>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            This is one of the great continents of the Thrones universe.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContinentDetailPage;
