"use client";
import { Continent } from "@/types/character";

interface Props {
  continents: Continent[];
}
export default function ContinentList({ continents }: Props) {
  return (
    <>
      <h1>Continents</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Id
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Name
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
            {continents.map((continent) => (
              <tr
                className="hover:bg-gray-100 cursor-pointer"
                key={continent.id}
                onClick={() =>
                  (window.location.href = `/continents/${continent.id}`)
                }
              >
                <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                  {continent.id}
                </td>
                <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                  {continent.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
