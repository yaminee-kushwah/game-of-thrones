import CharacterDetails from "@/components/CharacterDetails";
import { Character } from "@/types/character";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const res = await fetch(
    `https://thronesapi.com/api/v2/Characters/${params.id}`
  );
  const character: Character = await res.json();
  return {
    title: character.fullName,
    description: `Details about ${character.fullName}`,
  };
};

export default async function CharacterDetailPage({ params }: Props) {
  const res = await fetch(
    `https://thronesapi.com/api/v2/Characters/${params.id}`
  );
  const data: Character = await res.json();
  return (
    <>
      <CharacterDetails character={data}></CharacterDetails>
    </>
  );
}
