import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const  config = defineConfig({
    projectId: "u8o9hkb9",
    dataset: "production",
    title: "Website Sanity Studio",
    apiVersion: "2023-08-31",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas  }
});

export default config;