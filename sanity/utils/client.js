import { createClient } from "next-sanity";

const client = createClient({
    projectId: "u8o9hkb9",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-08-31",
});

export default client;