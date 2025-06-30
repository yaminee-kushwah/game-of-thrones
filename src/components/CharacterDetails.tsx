// import { Character } from "@/types/character";

// interface Props {
//   character?: Character;
// }

// export default function CharacterDetails({ character }: Props) {
//   if (!character)
//     return (
//       <div className="text-center mt-10 text-gray-500">
//         No character selected
//       </div>
//     );

//   return (
//     <div className="bg-gray-100 py-10 px-4 flex items-center justify-center">
//       <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
//         <div className="relative aspect-[5/4] bg-gray-200">
//           <img
//             src={character.imageUrl}
//             alt={character.fullName}
//             className="w-full h-full object-cover object-top"
//           />
//         </div>

//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-slate-900">
//             {character.fullName}
//           </h2>
//           <p className="text-sm text-gray-500 mt-1 italic">{character.title}</p>

//           <div className="mt-4 space-y-2 text-sm text-gray-700">
//             <p>
//               <span className="font-semibold text-slate-800">First Name:</span>{" "}
//               {character.firstName}
//             </p>
//             <p>
//               <span className="font-semibold text-slate-800">Last Name:</span>{" "}
//               {character.lastName}
//             </p>
//             <p>
//               <span className="font-semibold text-slate-800">Family:</span>{" "}
//               {character.family}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { Character } from "@/types/character";
import { motion } from "framer-motion";

interface Props {
  character?: Character;
}

export default function CharacterDetails({ character }: Props) {
  if (!character)
    return (
      <div className="text-center mt-10 text-gray-500">
        No character selected
      </div>
    );

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${character.imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0" />

      {/* Character Card */}
      <div className="relative z-10 flex items-center justify-center px-4 py-20">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white shadow-2xl rounded-xl overflow-hidden max-w-5xl w-full"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/2 w-full aspect-square">
                <img
                  src={character.imageUrl}
                  alt={character.fullName}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Details */}
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-center space-y-3">
                <h2 className="text-3xl font-bold text-slate-900">
                  {character.fullName}
                </h2>
                <p className="text-base italic text-gray-600">
                  {character.title}
                </p>

                <div className="space-y-2 text-sm text-gray-800 mt-4">
                  <p>
                    <span className="font-semibold text-slate-800">ID:</span>{" "}
                    {character.id}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">
                      First Name:
                    </span>{" "}
                    {character.firstName}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">
                      Last Name:
                    </span>{" "}
                    {character.lastName}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800">
                      Family:
                    </span>{" "}
                    {character.family}{" "}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">
                      Image Name:
                    </span>{" "}
                    {character.image}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">
                      Image URL:
                    </span>{" "}
                    <a
                      href={character.imageUrl}
                      className="text-blue-600 hover:underline break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {character.imageUrl}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
