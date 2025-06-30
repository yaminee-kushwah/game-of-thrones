import ContinentList from "@/components/ContinentList";
import { Continent } from "@/types/character";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Continent",
  description: "Game Of Thrones-Continent List",
};
const ContinentsPage = async () => {
  const res = await fetch("https://thronesapi.com/api/v2/Continents");
  const data: Continent[] = await res.json();

  return (
    <>
      <ContinentList continents={data}></ContinentList>
    </>
  );
};

export default ContinentsPage;
