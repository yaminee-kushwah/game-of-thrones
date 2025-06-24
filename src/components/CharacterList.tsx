import { Character } from "@/types/character";
import Link from "next/link";

interface Props {
  characters: Character[];
}
export default function CharacterList({ characters }: Props) {
  return (
    <div className="p-4">
      <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Featured Characters
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-sm:gap-8">
          {characters.map((character) => (
            <div key={character.id}>
              <Link key={character.id} href={`/characters/${character.id}`}>
                <div className="bg-gray-100 overflow-hidden">
                  <div className="bg-gray-50 aspect-[23/16]">
                    <img
                      src={character.imageUrl}
                      alt="Blog Post 1"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      {character.fullName}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-3">
                      {character.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
