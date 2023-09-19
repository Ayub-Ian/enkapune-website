import { groq } from "next-sanity";
import client from "../client";

export async function getRooms() {
  return client.fetch(
    groq`*[_type == "room"]{
            _id,
            name,
            "slug": slug.current,
            starting,
            "heroImg": hero.asset->url,
            "altImg": hero.alt
        }`
  );
}

export async function getRoom(slug) {
    return client.fetch(
      groq`*[_type == "room" && slug.current == $slug][0]{
              _id,
              name,
              "slug": slug.current,
              description,
              facilities,
              package, 
              "images" : images[]{
                asset->{_id, url}, alt
            }
          }`, {slug: slug}
    );
  }
  
