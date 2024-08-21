

export interface TEMPLATE {
    name: string;
    desc: string;
    icon: string;
    category: string;
    slug: string,
    aiPrompt: string;
    form?: FORM[];
}

export interface FORM {
    label: string;
    field: string;
    name: string;
    required?: boolean;
}

export const TEMPLATELIST = [
    {
        name: "Blog Title",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
        aiPrompt: "Give 5 blog topic ideas in bullet points only in given niche & outline topic and give me result in Richtext editor format",
        slug: "generate-blog-title0",
        form: [
            {
                name: "niche",
                label: "Enter your blog niche",
                field: "input",
                required: true,
            },
            {
                name: "outline",
                label: "Enter your blog outline",
                field: "textarea",
                required: false,
            }
        ]
    },
    {
        name: "Blog Content",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/8980/8980709.png",
        aiPrompt: "Give 5 blog topic ideas in bullet points only in given niche & outline topic and give me result in Richtext editor format",
        slug: "generate-blog-title1",
        form: [
            {
                name: "niche",
                label: "Enter your blog niche",
                field: "input",
                required: true,
            },
            {
                name: "outline",
                label: "Enter your blog outline",
                field: "textarea",
                required: false,
            }
        ]
    },
    {
        name: "Blog Topic Ideas",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/7454/7454738.png",
        aiPrompt: "Give 5 blog topic ideas in bullet points only in given niche & outline topic and give me result in Richtext editor format",
        slug: "generate-blog-title2",
        form: [
            {
                name: "niche",
                label: "Enter your blog niche",
                field: "input",
                required: true,
            },
            {
                name: "outline",
                label: "Enter your blog outline",
                field: "textarea",
                required: false,
            }
        ]
    },
    {
        name: "Youtube SEO Titles",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/174/174883.png",
        aiPrompt: "Give 5 blog topic ideas in bullet points only in given niche & outline topic and give me result in Richtext editor format",
        slug: "generate-blog-title3",
        form: [
            {
                name: "niche",
                label: "Enter your blog niche",
                field: "input",
                required: true,
            },
            {
                name: "outline",
                label: "Enter your blog outline",
                field: "textarea",
                required: false,
            }
        ]
    },
    {
        name: "Youtube Descriptions",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/10885/10885022.png",
        aiPrompt: "Give 5 blog topic ideas in bullet points only in given niche & outline topic and give me result in Richtext editor format",
        slug: "generate-blog-title4",
        form: [
            {
                name: "niche",
                label: "Enter your blog niche",
                field: "input",
                required: true,
            },
            {
                name: "outline",
                label: "Enter your blog outline",
                field: "textarea",
                required: false,
            }
        ]
    },
    {
        name: "Youtube Tags",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/4379/4379655.png",
        aiPrompt: "Give 5 blog topic ideas in bullet points only in given niche & outline topic and give me result in Richtext editor format",
        slug: "generate-blog-title5",
        form: [
            {
                name: "niche",
                label: "Enter your blog niche",
                field: "input",
                required: true,
            },
            {
                name: "outline",
                label: "Enter your blog outline",
                field: "textarea",
                required: false,
            }
        ]
    },
    {
        name: "Rewrite Article (Plagiarism free)",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/3079/3079976.png",
        aiPrompt: "Give 5 blog topic ideas in bullet points only in given niche & outline topic and give me result in Richtext editor format",
        slug: "generate-blog-title6",
        form: [
            {
                name: "niche",
                label: "Enter your blog niche",
                field: "input",
                required: true,
            },
            {
                name: "outline",
                label: "Enter your blog outline",
                field: "textarea",
                required: false,
            }
        ]
    },
    {
        name: "Text Improver",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2476/2476980.png",
        aiPrompt: "Give 5 blog topic ideas in bullet points only in given niche & outline topic and give me result in Richtext editor format",
        slug: "generate-blog-title7",
        form: [
            {
                name: "niche",
                label: "Enter your blog niche",
                field: "input",
                required: true,
            },
            {
                name: "outline",
                label: "Enter your blog outline",
                field: "textarea",
                required: false,
            }
        ]
    }
]