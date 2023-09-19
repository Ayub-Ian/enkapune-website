const experience = {
    name: "experience",
    title: "Experiences",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        }, 
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "ref",
            title: "Reference",
            type: "string"
        }
    ]
}

export default experience