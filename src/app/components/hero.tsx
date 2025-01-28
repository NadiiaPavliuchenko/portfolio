import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="px-[100] pt-[122] pb-[182] flex items-center justify-between">
      <div>
        <div>
          <h1 className="font-light text-7xl leading-none tracking-tight mb-[72px]">
            <span className="text-gray-400">Hi, I&apos;m </span>Nadiia Frontend
            Developer <span className="text-gray-400">Based in Kyiv</span>
          </h1>
        </div>
        <Link
          className="bg-orange-500 w-[135] h-[54] py-4 px-8 rounded-md font-medium text-xl hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-700"
          href="#portfolio"
        >
          VIEW MY WORK
        </Link>
      </div>
      <Image
        src="/hero-image.png"
        width="400"
        height="400"
        alt="website owner emoji"
      />
    </div>
  );
}
