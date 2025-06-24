import { Character } from "@/types/character";
import CharacterList from "@/components/CharacterList";

export default async function CharactersPage() {
  const res = await fetch("https://thronesapi.com/api/v2/Characters");
  const data: Character[] = await res.json();

  return <CharacterList characters={data}></CharacterList>;
}
