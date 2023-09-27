import { groq } from "next-sanity";
import client from "../client";

export async function getExperiences() {
    return client.fetch(
        groq`*[_type == "experience"] | order(_createdAt asc){
            _id,
            name,
            "slug": slug.current,
            description,
            ref
        }`,{}, {
            next: {
                revalidate: 60
            }
        }
    )

}