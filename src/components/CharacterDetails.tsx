"use client";
import React from "react";
import { Character } from "@/types/character";

type Props = {
  character?: Character;
};

export default function CharacterDetails({ character }: Props) {
  return (
    <div className="w-1/2 bg-white shadow rounded self-start p-4 ml-4">
      {character ? (
        <>
          <h1 className="text-xl font-bold mb-2">Character Detail</h1>
          <h2 className="text-2xl font-bold mb-4 text-center">
            {character.fullName}
          </h2>
          <img
            src={character.imageUrl}
            alt={character.fullName}
            className="h-60 w-60 object-cover rounded mb-4 mx-auto"
          />
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            {/* <p>ID:</p>
            <p>{character.id}</p> */}

            <p>First Name:</p>
            <p>{character.firstName}</p>

            <p>Last Name:</p>
            <p>{character.lastName}</p>

            <p>Full Name:</p>
            <p>{character.fullName}</p>

            <p>Title:</p>
            <p>{character.title}</p>

            <p>Family:</p>
            <p>{character.family}</p>

            <p>Image:</p>
            <p>{character.image}</p>

            <p>Image URL:</p>
            <p>{character.imageUrl}</p>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Click on a character to view details</p>
      )}
    </div>
  );
}
