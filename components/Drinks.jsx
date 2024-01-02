import Image from "next/image";
import Link from "next/link";
import React from "react";

const Drinks = ({ drinks }) => {
  return (
    //   <ul className="menu menu-vertical pl-0">
    //     {drinks.map((drink) => {
    //       return (
    //         <li key={drink.idDrink}>
    //           <Link className="text-xl font-medium" href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // );
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link
              className="text-xl font-medium"
              href={`/drinks/${drink.idDrink}`}
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 768px) 50vw"
                  alt={drink.strDrink}
                  className="rounded-md object-cover"
                />
                {drink.strDrink}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Drinks;
