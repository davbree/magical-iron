export default {
    "type": "object",
    "name": "reviewsblock",
    "title": "Reviews Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Element ID",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": true,
            "initialValue": "reviews_block.html",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "bg",
            "title": "Background",
            "description": "The background of the section.",
            "initialValue": "gray",
            "validation": null,
            "options": {
                "list": [
                    "gray",
                    "white"
                ]
            }
        },
        {
            "type": "array",
            "name": "reviews",
            "title": "Reviews",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "author",
                            "title": "Author",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "avatar",
                            "title": "Avatar",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "content",
                            "title": "Content",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "author"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "reviewsblock"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}