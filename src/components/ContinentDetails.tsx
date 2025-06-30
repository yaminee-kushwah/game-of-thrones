import { Continent } from "@/types/character";

interface Props {
  continent: Continent;
}
export default function ContinentDetails({ continent }: Props) {
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
          <h3 className="text-xl font-bold"> {continent.name}</h3>
          <p className="text-gray-600 text-sm">Continent ID: {continent.id}</p>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            This is one of the great continents of the Thrones universe.
          </p>
        </div>
      </div>
    </>
  );
}
