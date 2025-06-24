"use client";
import React from "react";
import { Character } from "@/types/character";

interface Props {
  character?: Character;
}

export default function CharacterDetails({ character }: Props) {
  return (
    // <div className="w-1/2 bg-white shadow rounded self-start p-4 ml-4">
    //   {character ? (
    //     <>
    //       <h1 className="text-xl font-bold mb-2">Character Detail</h1>
    //       <h2 className="text-2xl font-bold mb-4 text-center">
    //         {character.fullName}
    //       </h2>
    //       <img
    //         src={character.imageUrl}
    //         alt={character.fullName}
    //         className="h-60 w-60 object-cover rounded mb-4 mx-auto"
    //       />
    //       <div className="grid grid-cols-2 gap-y-2 text-sm">
    //         {/* <p>ID:</p>
    //         <p>{character.id}</p> */}

    //         <p>First Name:</p>
    //         <p>{character.firstName}</p>

    //         <p>Last Name:</p>
    //         <p>{character.lastName}</p>

    //         <p>Full Name:</p>
    //         <p>{character.fullName}</p>

    //         <p>Title:</p>
    //         <p>{character.title}</p>

    //         <p>Family:</p>
    //         <p>{character.family}</p>

    //         <p>Image:</p>
    //         <p>{character.image}</p>

    //         <p>Image URL:</p>
    //         <p>{character.imageUrl}</p>
    //       </div>
    //     </>
    //   ) : (
    //     <p className="text-gray-500">Click on a character to view details</p>
    //   )}
    // </div>
    <div className="relative overflow-hidden min-h-screen bg-white">
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-30 z-0"
        style={{ backgroundImage: `url(${character?.imageUrl})` }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 max-w-3xl mx-auto">
        <img
          src={character?.imageUrl}
          alt={character?.fullName}
          className="w-60 h-60 object-cover rounded-full border-4 border-white shadow-lg mb-6"
        />

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {character?.fullName}
        </h1>
        <p className="text-gray-500 text-sm mb-4">Played by Unknown</p>

        <p className="text-gray-700 text-lg">
          {character?.title
            ? `${character.title} of ${character.family || "unknown family"}`
            : `A member of ${character?.family || "an unknown family"}.`}
        </p>
      </div>
    </div>
  );
}
