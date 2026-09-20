"use client";

const shots = [
    {
        id: 1,
        image: "/shots/shot_01.webp",
    },
    {
        id: 2,
        image: "/shots/shot_02.webp",
    },
    {
        id: 3,
        image: "/shots/shot_03.webp",
    },
    {
        id: 4,
        image: "/shots/shot_04.webp",
    },
    {
        id: 5,
        image: "/shots/shot_05.webp",
    },
    {
        id: 6,
        image: "/shots/shot_06.webp",
    },
    {
        id: 7,
        image: "/shots/shot_07.webp",
    },
    {
        id: 8,
        image: "/shots/shot_08.webp",
    },
];

export default function DisplayShotsBlock() {
    return (
        <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-5 md:py-6">

            {/* Carousel */}
            <div className="relative w-full overflow-hidden">

                {/* Left fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent md:w-32" />

                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent md:w-32" />

                {/* Moving track */}
                <div
                    className="flex w-max gap-4 md:gap-6"
                    style={{
                        animation: "dribbleMarquee 40s linear infinite",
                    }}
                >

                    {/* First set */}
                    <div className="flex shrink-0 gap-4 md:gap-6">
                        {shots.map((shot) => (
                            <div
                                key={`first-${shot.id}`}
                                className="
                                    group
                                    relative
                                    w-[75vw]
                                    max-w-155
                                    shrink-0
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/3
                                    md:w-[32vw]
                                "
                            >
                                <div className="aspect-[1600/946] overflow-hidden">
                                    <img
                                        src={shot.image}
                                        alt=""
                                        draggable={false}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-700
                                            ease-out
                                            group-hover:scale-105
                                        "
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set */}
                    <div
                        aria-hidden="true"
                        className="flex shrink-0 gap-4 md:gap-6"
                    >
                        {shots.map((shot) => (
                            <div
                                key={`second-${shot.id}`}
                                className="
                                     group
                                    relative
                                    w-[75vw]
                                    max-w-155
                                    shrink-0
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/3
                                    md:w-[32vw]
                                "
                            >
                                <div className="aspect-[1600/946] overflow-hidden">
                                    <img
                                        src={shot.image}
                                        alt=""
                                        draggable={false}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-700
                                            ease-out
                                            group-hover:scale-105
                                        "
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS */}
            <style>{`
                @keyframes dribbleMarquee {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(calc(-50% - 12px));
                    }
                }

                @media (max-width: 767px) {
                    @keyframes dribbleMarquee {
                        from {
                            transform: translateX(0);
                        }

                        to {
                            transform: translateX(calc(-50% - 8px));
                        }
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    [style*="dribbleMarquee"] {
                        animation-play-state: paused !important;
                    }
                }
            `}</style>

        </section>
    );
}