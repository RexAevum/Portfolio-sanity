// schema for experience
export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        // company, location, role/title, skills, start date, end date, current
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: "location",
            title: "Location",
            type: "string"
        },
        {
            name: "role",
            title: "Role",
            type: "string"
        },
        {
            name: "start",
            title: "Start Date",
            type: "date"
        },
        {
            name: "current",
            type: "boolean",
            title: "Current"
        },
        {
            name: "end",
            title: "End Date",
            type: "date"
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{
                type: "string"
            }]
        }, 
        {
            name: "order",
            title: "Order",
            type: "number"
        }
    ],
    ordering: [
        {
            title: "Start Date, Newest",
            name: "startNewest",
            by: [
                {field: "start", direction: "desc"}
            ]
        }
    ],
    initialValue: {
        current: false
    }
}