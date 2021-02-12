// schema for project entry
export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: "date",
            type: "datetime"
        },
        {
            name: "tech",
            type: "string"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    {
                        value: "Personal",
                        title: "Personal"
                    },
                    {
                        value: "Client",
                        title: "Client"
                    },
                    {
                        value: "Shool",
                        title: "School"
                    },
                    {
                        value: "Work",
                        title: "Work"
                    }
                ]
            }
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "github",
            type: "url"
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ],
            options: {
                layout: "tags"
            }
        },
        {
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
    ]
}