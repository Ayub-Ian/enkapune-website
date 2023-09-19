const gallery = {
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        }, 
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" }
        },
        {
            name: "Year",
            title: "Year",
            type: "string"
        }, 
        {
            name: "month",
            title: "Month",
            type: "string"
        }, 
        {
            name: "collection",
            title: "Collection",
            type: "array",
            of: [
                {   name: 'image',
                    type: 'image',
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

export default gallery