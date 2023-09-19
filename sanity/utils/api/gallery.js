import { groq } from "next-sanity";
import client from "../client";

export async function getGallery() {
    return client.fetch(
        groq`*[_type == "gallery" && defined(collection)]{
            _id,
            title,
            "slug": slug.current,
            "collection" : collection[]{
                asset->{_id, url}, alt
            }
        }`
    )

}