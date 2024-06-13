"use client";
import Link from "next/link";
import React from "react";

export default function RecipeContainer(props: {
  path: string;
  title: string | undefined;
  description?: string | undefined;
}) {
  return (
    <Link
      href={props.path}
      className="m-4
      cursor-pointer
      rounded-lg
      bg-container
      p-2
      hover:bg-container/70
      md:p-4"
    >
      <h2 className="mb-2 text-xl font-bold md:text-2xl">{props.title}</h2>
      <p className="text-balance text-base md:text-lg">{props.description}</p>
    </Link>
  );
}
