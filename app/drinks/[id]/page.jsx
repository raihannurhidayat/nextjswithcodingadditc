import Image from "next/image";
import Link from "next/link";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("failed to fetch drink...");
  }
  return res.json();
};

const DrinkDetails = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSource = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href={`/drinks`} className="btn btn-primary mt-8 mb-12">
        Back To Drinks
      </Link>
      <Image
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        width={300}
        height={300}
        src={imgSource}
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default DrinkDetails;
