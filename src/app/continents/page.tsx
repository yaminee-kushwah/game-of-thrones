"use client";

import { Continent } from "@/types/character";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ContinentsPage = () => {
  const [continents, setContinents] = useState<Continent[]>([]);
  const router = useRouter();
  useEffect(() => {
    fetchContinents();
  }, []);

  const fetchContinents = async () => {
    const res = await fetch("https://thronesapi.com/api/v2/Continents");
    const data = await res.json();
    console.log("Data in fetchContinents", data);
    setContinents(data);
  };
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
                onClick={() => router.push(`/continents/${continent.id}`)}
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
};

export default ContinentsPage;
