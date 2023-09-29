const siteName = "Basilinda";

const hero = {
    image: {
        src: "/images/cannon.svg",
        alt: "alt upload image text",
    },
};

const uploadCategories = [
    {
        name: "Poetry",
        href: "/publications/poetry",
        image: {
            url: "/images/cannon.svg",
            alt: "alt upload image text",
        },
        subCategories: [
            {
                name: "Free Verse",
                href: "/publications/poetry/freeverse",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt upload image text",
                },
            },
            {
                name: "Traditional",
                href: "/publications/poetry/traditional",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt upload image text",
                },
            },
            {
                name: "Prose Poetry",
                href: "/publications/poetry/prosepoetry",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt upload image text",
                },
            },
            {
                name: "Experimental",
                href: "/publications/poetry/experimental",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt upload image text",
                },
            },
        ],
    },
    {
        name: "editorials",
        href: "/publications/poetry",
        image: {
            url: "/images/cannon.svg",
            alt: "alt upload image text",
        },
        subCategories: [
            {
                name: "Essay",
                href: "/publications/poetry/essay",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt upload image text",
                },
            },
            {
                name: "Article",
                href: "/publications/poetry/essay",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt upload image text",
                },
            },
        ],
    },
    {
        name: "Letters",
        href: "/publications/letters",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "Dear John",
                href: "/publications/letters/dearjohn",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "Resignations",
                href: "/publications/letters/resignations",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "Open",
                href: "/publications/letters/open",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "Mixed Media",
        href: "/publications/mixedmedia",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "visual",
                href: "/publications/mixedmedia/visual",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "Audio",
                href: "/publications/mixedmedia/audio",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
];

const uploadConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Title", type: "text", value: "" },
        { name: "Author", type: "text", value: "" },
        {
            name: "Hook",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Published", type: "text", value: "" },
        { name: "Artist", type: "text", value: "" },
    ],
};

const subscribeConfig = {
    website: "Basilinda",
    category: "contact",
    fields: [{ name: "Email", type: "text", value: "" }],
};
const contactConfig = {
    website: "Basilinda",
    category: "contact",
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "Comment", type: "text", value: "", multiline: true, rows: 4 },
    ],
};

// 7. About

// 7a. About

const secondaryProfiles = [
    {
        image: {
            url: "/images/sydneyBio.webp",
            alt: "Sydney",
        },
        name: "Sydney",
        content: "Sydney is the greatest.",
    },
    {
        image: {
            url: "/images/keriBio.jpg",
            alt: "Keri",
        },
        name: "Keri",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
    },
    {
        image: { url: "/images/davidBio.webp", alt: "Editor Owen Cash" },
        name: "Queer Dave",
        content: "Owen likes to PARTY!",
    },
];

// 7b. Studio

// 7c. Work

// 8. Social Media

// 9. Process
// 10. Contact

const contributorConfig = {
    fields: [
        { name: "name", type: "text", value: "" },
        {
            name: "bio",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};

const galleryConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Title", type: "text", value: "" },
        { name: "Author", type: "text", value: "" },
        {
            name: "Hook",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Published", type: "text", value: "" },
        { name: "Artist", type: "text", value: "" },
    ],
};

const textSubmissionsConfig = {
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "Category", type: "text", value: "" },

        {
            name: "Comment",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        {
            name: "Bio",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};
const imageSubmissionsConfig = {
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "category", type: "text", value: "" },
        {
            name: "Comment",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        {
            name: "Bio",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};

const leftPages = [
    {
        name: "Poetry",
        href: "/publications/poetry",
        nameAlt: "Canons",
    },
    {
        name: "Letters",
        nameAlt: "Objectives",
        href: "/publications/letters",
    },
    {
        name: "Mixed Media",
        nameAlt: "Components",
        href: "/publications/mixedmedia",
    },
    // {
    //     name: "Genrequeer",
    //     href: "/publications/genrequeer",
    //     nameAlt: "Soldiers",
    // },
];
const rightPages = [
    {
        name: "Editorials",
        nameAlt: "Components",
        href: "/publications/editorials",
    },
    {
        name: "About Us",
        href: "/about",
        nameAlt: "Victory Conditions",
        subPages: [
            {
                name: "Masthead",
                href: "/about/masthead",
                nameAlt: "Victory Conditions",
            },
            {
                name: "Mission Statement",
                href: "/about/missionstatement",
                nameAlt: "Victory Conditions",
            },
        ],
    },
    {
        name: "Submit",
        nameAlt: "Play",
        href: "/submissions",
        subPages: [],
    },
];

const galleryCategories = [
    {
        name: "fiction",
        href: "/publications/fiction",
        image: {
            url: "/images/placeholder.webp",
            alt: "alt gallery image text",
        },
        subCategories: [
            {
                name: "short story",
                href: "/publications/fiction/shortstories",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt gallery image text",
                },
            },
            {
                name: "flash fiction",
                href: "/publications/fiction/flash",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "novella",
                href: "/publications/fiction/novellas",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "poetry",
        href: "/publications/poetry",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "free verse",
                href: "/publications/subcategories/free verse",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "formalist",
                href: "/publications/subcategories/formalist",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "prose poetry",
                href: "/publications/subcategories/prose poetry",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "editorials",
        href: "/publications/editorials",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "article",
                href: "/publications/editorials/articles",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "essay",
                href: "/publications/editorials/essays",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "mixed media",
        href: "/publications/mixed-media",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "found poetry",
                href: "/publications/mixed media/articles",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "visual art",
                href: "/publications/mixed media/essays",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
];

export {
    hero,
    siteName,
    leftPages,
    rightPages,
    uploadCategories,
    galleryConfig,
    galleryCategories,
    uploadConfig,
    subscribeConfig,
    contributorConfig,
    textSubmissionsConfig,
    imageSubmissionsConfig,
    contactConfig,
    secondaryProfiles,
};
