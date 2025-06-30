import ContinentDetails from "@/components/ContinentDetails";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const res = await fetch(
    `https://thronesapi.com/api/v2/Continents/${params.id}`
  );
  const continent = await res.json();
  return {
    title: continent.name,
    description: `Details about ${continent.name}`,
  };
};

const ContinentDetailPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://thronesapi.com/api/v2/Continents/${params.id}`
  );
  const data = await res.json();
  console.log("Data : ", data);
  return (
    <>
      <ContinentDetails continent={data}></ContinentDetails>
    </>
  );
};

export default ContinentDetailPage;
