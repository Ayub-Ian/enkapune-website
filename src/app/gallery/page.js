// import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { getGallery } from "../../../sanity/utils/api/gallery";
import Image from "next/image";

export default async function Gallery() {
  const data = await getGallery();

  return (
    <div className="pt-24 px-4 lg:px-[60px]">
    <div className="  columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span className="flex max-h-full max-w-full items-center justify-center"></span>
          <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
        </div>

        <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
          2023 Upcoming Event 
        </h1>
        <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          Our incredible Enkapune community gets together in Kajido for unforgattable experiences
        </p>
        <a
          className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
          href="/gallery"
          target="_blank"
          rel="noreferrer"
        >
          Next event coming soon !!
        </a>
      </div>
      {data?.map(({ _id, title, collection }) => (
        <div key={_id}>
          <h1 className="fs-3 monty uppercase pb-5 font-semibold">{title}</h1>

          {collection?.map((img, index) => (
            <Link
              key={index}
              href={`/gallery`}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt={img.alt}
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                src={img.asset.url}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}
