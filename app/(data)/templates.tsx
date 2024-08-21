

export interface TEMPLATE {
    name: string;
    desc: string;
    category: string;
    icon: string;
    aiPrompt: string;
    slug: string,
    form?: FORM[];
}

export interface FORM {
    name: string;
    label: string;
    field: string;
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
        slug: "blog-topic-ideas",
        form: [
            {
                name: "niche",
                label: "Enter your blog niche",
                field: "input",
                required: true,
            },
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
    },
    {
        name: "Instagram Post Generator",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/174/174855.png",
        aiPrompt: "Give 5 blog topic ideas in bullet points only in given niche & outline topic and give me result in Richtext editor format",
        slug: "instagram-post-generator",
        form: [
            {
                name: "keyword",
                label: "Enter your keywords for your post",
                field: "input",
                required: true,
            },
        ]
    },
    {
        name: "Add Emojis to Text",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/4160/4160724.png",
        aiPrompt: "Give 5 blog topic ideas in bullet points only in given niche & outline topic and give me result in Richtext editor format",
        slug: "add-emojis-to-text",
        form: [
            {
                name: "keyword",
                label: "Enter your text to add emojis",
                field: "textarea",
                required: true,
            },
        ]
    },
    {
        name: "Instagram Hashtag Generator",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
        aiPrompt: "Generate instagram hashtags based on the keywords provided.",
        slug: "instagram-hashtag-generator",
        form: [
            {
                name: "keyword",
                label: "Enter keywords for your instagram hashtag",
                field: "input",
                required: true,
            },
        ]
    }
]