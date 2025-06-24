import CharacterDetails from "@/components/CharacterDetails";
import { Character } from "@/types/character";

interface Props {
  params: {
    id: string;
  };
}
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
