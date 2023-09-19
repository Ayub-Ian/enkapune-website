const room = {
    name: "room",
    title: "Rooms",
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
            name: "hero",
            title: "Hero Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "facilities",
            title: "Facilities",
            type: "array",
            of: [{type: "string"}]
            
        },
        {
            name: "ref",
            title: "Reference",
            type: "string"
        },
        {
            name: "url",
            title: "Url",
            type: "url"
        },
        {
            name: "starting",
            title: "Starting Price",
            type: "number"
        },
        {
            name: "package",
            title: "Packages",
            type: "array",
            of: [{
                type: "object",
                title: "Details",
                fields: [
                    {
                        title: "Name",
                        name: "name",
                        type: "string"
                    },
                    {
                        title: "Price",
                        name: "price",
                        type: "number"
                    },
                    {
                        title: "Description",
                        name: "description",
                        type: "array",
                        of: [{type: "string"}]
                    }
                ]
            }]

        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        {
                            name: "alt",
                            title: "Alt",
                            type: "string"
                        }
                    ]
                }
            ]
        }


    ]
}

export default room