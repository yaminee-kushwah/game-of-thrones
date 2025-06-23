"use client";
import { useEffect, useState } from "react";
import { Character } from "@/types/character";
import CharacterDetails from "@/components/CharacterDetails";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch("https://thronesapi.com/api/v2/Characters");
        const data = await res.json();
        setCharacters(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);

  const fetchCharacterById = async (id: number) => {
    try {
      const res = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
      const data = await res.json();
      console.log("API call on click : ", data);
      setSelectedCharacter(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCharacters = characters.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex min-h-screen bg-blue-100 p-4">
      {/* Character List */}
      <div className="w-1/2 bg-white shadow rounded p-4 overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Character List</h1>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {currentCharacters.map((char) => (
              <tr
                key={char.id}
                className={`cursor-pointer ${
                  selectedCharacter?.id === char.id
                    ? "bg-gray-300"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => fetchCharacterById(char.id)}
              >
                <td className="p-2">{char.id}</td>
                <td className="p-2">{char.fullName}</td>
                <td className="p-2">
                  <img
                    src={char.imageUrl}
                    alt={char.fullName}
                    className="h-10 w-10 object-cover rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-black/54">Items per page: </span>

            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="px-2 py-1 pr-8 rounded outline-none border border-transparent focus:border-gray-400"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-gray-400"
                  viewBox="0 0 55.753 55.753"
                >
                  <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
                </svg>
              </button>
            </div>

            <span className="text-black/54">
              {indexOfFirstItem + 1} -{" "}
              {Math.min(indexOfLastItem, characters.length)} of{" "}
              {characters.length}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-400 rotate-180"
                viewBox="0 0 55.753 55.753"
              >
                <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <CharacterDetails character={selectedCharacter} />
    </div>
  );
}
