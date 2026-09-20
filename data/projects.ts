
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
        desc: "For Napsys, I worked across both the product and its digital presence, creating the complete platform mockup and the website design from the ground up. I focused on building a clear and approachable interface for a product centered around AI-powered workflows, while keeping the visual system consistent across the platform and marketing website. I also took the website beyond the design stage and converted the final interface into a functional Webflow build.",
        category: "SaaS",
        year: "2023",
        image: "/thumbnail/napsys_thumbnail.webp",
        href: "https://napsys.ai"
    },
    {
        id: "p2",
        title: "Samurai Warlords",
        slug: "samurai-warlords",
        desc: "Samurai Warlords involved designing a wide range of digital experiences across its gaming and web3 ecosystem. I designed the main website along with the staking platform, while also working on the interfaces for its Chess and Solitaire games. Beyond the product experiences, I created supporting marketing materials to maintain a consistent visual language across different touchpoints. The project allowed me to work across product UI, gaming interfaces and promotional design within one visual system.",
        category: "Gaming + Blockchain",
        year: "2021",
        image: "/thumbnail/samurai-w-thumbnail.webp",
        href: "https://samuraiwarlords.com/"
    },
    {
        id: "p3",
        title: "iVenus",
        slug: "ivenus",
        desc: "For iVenus, I designed the store website with a focus on creating a polished and structured experience for an automotive retail platform. I worked on translating the brand and its range of products and services into a clear digital interface, paying attention to hierarchy, navigation and the overall shopping experience. After completing the design, I also began converting the interface into Next.js, bringing the designed experience into a functional web environment.",
        category: "Ecommerce Store",
        year: "2025",
        image: "/thumbnail/ivenus_thumbnail.webp",
        href: "https://ivenus.in/"
    },
    {
        id: "p4",
        title: "MAHY Khoory Automotive",
        slug: "mahy-khoory-automotive",
        desc: "For MAHY Khoory Automotive, I designed the website from the ground up in Figma, creating a structured digital experience for an automotive group with multiple brands and offerings. The design focused on presenting a large amount of information in a way that remained clear, refined and easy to navigate. Once the design was established, I translated the Figma layouts into a functional Next.js implementation, carrying the visual system and interaction structure from the design into the web experience.",
        category: "Automotive Corporate",
        year: "2026",
        image: "/thumbnail/mahy-khoory-a-thumbnail.webp",
        href: "https://mk-auto-two.vercel.app/"
    },
];
