import Drinks from "@/components/Drinks";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await fetch(url);
  // throw error
  if(!data.ok){
    throw new Error("Failed to Fetch Drinks")
  }
  const result = await data.json();
  return result
};

const DrinksPage = async () => {
  const result = await fetchDrinks()

  // console.log(result);
  return (
    <div>
      <Drinks drinks={result.drinks} />
    </div>
  );
};

export default DrinksPage;
