import React from "react";
import tecnologies from "@/lib/tecnologies.json";

export default function Technologies() {
  return (
    <div id="technologies" className="px-[100px] pb-[132px]">
      <h2 className="font-light text-7xl mb-[66px]">Tecnologies I Use</h2>
      <ul className="flex gap-[16px] flex-wrap justify-center">
        {tecnologies.map((technology) => (
          <li
            key={technology.id}
            className="bg-[#232323] rounded-md p-[30px] hover:scale-105 transition duration-300"
          >
            <svg className="fill-white mb-6" width="200" height="114">
              <use href={technology.icon}></use>
            </svg>
            <div className="flex justify-between items-center">
              <p className="font-normal text-lg tracking-tight">
                {technology.technology}
              </p>
              <div className="font-light text-xs bg-gray-400 text-[#232323] rounded-full px-2 py-1">
                {technology.category}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
