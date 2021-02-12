// schema for education
export default {
    name: "education",
    title: "Education",
    type: "document",
    fields: [
        // school, degree, fieldofstudy, start date, end date, honors
        {
            name: "school",
            title: "School",
            type: "string"
        },
        {
            name: "degree",
            title: "Degree",
            type: "string",
            options: {
                list: [
                    // Associate in Arts (AA), Bachelor's Degree (BA), Master's Degree (MA), Doctorate (PhD), Bootcamp, Online Course, Self Study
                    {
                        value: "Associate in Arts (AA)",
                        title: "Associate in Arts (AA)"
                    },
                    {
                        value: "Bachelor's Degree (BA)",
                        title: "Bachelor's Degree (BA)"
                    },
                    {
                        value: "Bootcamp",
                        title: "Bootcamp"
                    },
                    {
                        value: "Online Course",
                        title: "Online Course"
                    },
                    {
                        value: "Self Study",
                        title: "Self Study"
                    },
                    {
                        value: "Master's Degree (MA)",
                        title: "Master's Degree (MA)"
                    },
                    {
                        value: "Doctorate (PhD)",
                        title: "Doctorate (PhD)"
                    },
                    {
                        value: "Other",
                        title: "Other"
                    }
                ]
            }
        },
        {
            name: "fieldofstudy",
            title: "Field Of Study",
            type: "string"
        },
        {
            name: "honors",
            title: "Honors",
            type: 'blockContent',
        },
        {
            name: "start",
            title: "Start Date",
            type: "date"
        },
        {
            name: "current",
            title: "Current",
            type: "boolean",
            layout: "checkbox"
        },
        {
            name: "end",
            title: "End Date",
            type: "date"
        }

    ],
    initialValue: {
        current: false
    }
}