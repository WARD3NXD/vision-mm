export interface Project {
    id: string;
    title: string;
    slug: string;
    desc: string;
    category: string;
    year: string;
    image: string;
    href: string;
}

export const projects: Project[] = [
    {
        id: "p1",
        title: "Napsys",
        slug: "napsys-ai",
        desc: "A SaaS platform built around AI-powered workflows, designed to make complex tasks feel simple and approachable.",
        category: "SaaS",
        year: "2023",
        image: "/thumbnail/napsys_thumbnail.webp",
        href: "https://napsys.ai"
    },
    {
        id: "p2",
        title: "Samurai Warlords",
        slug: "samurai-warlords",
        desc: "A gaming and blockchain experience built around the world of Samurai Warlords, blending a bold visual identity with a web3 product experience.",
        category: "Gaming + Blockchain",
        year: "2021",
        image: "/thumbnail/samurai-w-thumbnail.webp",
        href: "https://samuraiwarlords.com/"
    },
    {
        id: "p3",
        title: "MAHY Khoory Automotive",
        slug: "mahy-khoory-automotive",
        desc: "A corporate automotive website bringing multiple brands and services together through a polished and structured digital experience.",
        category: "Automotive Corporate",
        year: "2026",
        image: "/thumbnail/mahy-khoory-a-thumbnail.webp",
        href: "https://mk-auto-two.vercel.app/"
    },
];