"use client";

import { useEffect, useState } from "react";

interface Stat {
    id: number;
    label: string;
    suffix: string;
    Number: number;
}

interface StatsResponse {
    docs: Stat[];
    totalDocs: number;
}

/* =========================================================
   STATIC FALLBACK STATS
   Used when Payload / Supabase is unavailable.
========================================================= */

const STATIC_STATS: Stat[] = [
    {
        id: 1,
        label: "Projects",
        suffix: "+",
        Number: 100,
    },
    {
        id: 2,
        label: "Years Experience",
        suffix: "+",
        Number: 6,
    },
    {
        id: 3,
        label: "Clients",
        suffix: "+",
        Number: 70,
    },
    {
        id: 4,
        label: "Countries",
        suffix: "+",
        Number: 8,
    },
];

export default function StatsBlock() {
    const [stats, setStats] = useState<Stat[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);

                const response = await fetch("/api/stats?sort=id", {
                    cache: "no-store",
                });

                if (!response.ok) {
                    setStats(STATIC_STATS);
                    return;
                }

                const data: StatsResponse = await response.json();

                if (!data.docs || data.docs.length === 0) {
                    setStats(STATIC_STATS);
                    return;
                }

                setStats(data.docs);
            } catch {
                setStats(STATIC_STATS);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    /* =========================================================
       LOADING STATE
    ========================================================= */

    if (loading) {
        return (
            <section className="relative w-full overflow-hidden py-16 md:py-28">
                <div className="mx-auto w-full max-w-[1800px] px-5 md:px-10">
                    <div className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="
                                    relative
                                    min-h-55
                                    border-r
                                    border-b
                                    border-white/10
                                    p-5
                                    sm:min-h-65
                                    sm:p-7
                                    md:min-h-95
                                    md:p-10
                                "
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[10px] tracking-[0.25em] text-white/20">
                                        0{item}
                                    </span>

                                    <span className="font-mono text-[9px] tracking-[0.2em] text-white/10">
                                        STAT
                                    </span>
                                </div>

                                <div className="absolute inset-x-5 bottom-12 sm:inset-x-7 md:inset-x-10 md:bottom-16">
                                    <div className="h-16 w-28 animate-pulse bg-white/4 md:h-24 md:w-40" />

                                    <div className="mt-5 h-3 w-20 animate-pulse bg-white/4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative w-full overflow-hidden py-16 md:py-28">
            {/* Background grid */}
            {/* <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.035]
                    bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                    bg-[size:48px_48px]
                "
            /> */}

            <div className="relative mx-auto w-full max-w-550">

                {/* Stats */}
                <div className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-4">
                    {stats.map((item, index) => (
                        <article
                            key={item.id}
                            className="
                                group
                                relative
                                min-h-55
                                overflow-hidden
                                border-r
                                border-b
                                border-white/10
                                p-5
                                transition-colors
                                duration-500
                                hover:bg-white/2.5
                                sm:min-h-65
                                sm:p-7
                                md:min-h-95
                                md:p-10
                            "
                        >
 

                            {/* Corner detail */}
                            <div
                                className="
                                    absolute
                                    right-0
                                    top-0
                                    h-8
                                    w-8
                                    border-b
                                    border-l
                                    border-white/10
                                    transition-all
                                    duration-500
                                    group-hover:h-12
                                    group-hover:w-12
                                    group-hover:border-white/30
                                "
                            />

                            {/* Number */}
                            <div className="absolute inset-x-5 bottom-12 sm:inset-x-7 md:inset-x-10 md:bottom-16">
                                <div className="flex items-end leading-none">
                                    <span
                                        className="
                                            text-[clamp(4rem,10vw,9rem)]
                                            font-medium
                                            tracking-[-0.08em]
                                            text-white
                                            transition-transform
                                            duration-700
                                            ease-out
                                            group-hover:-translate-y-2
                                        "
                                    >
                                        {item.Number}
                                    </span>

                                    <span
                                        className="
                                            mb-[0.18em]
                                            ml-1
                                            text-2xl
                                            font-light
                                            tracking-tight
                                            text-white/50
                                            sm:text-3xl
                                            md:text-5xl
                                        "
                                    >
                                        {item.suffix}
                                    </span>
                                </div>

                                {/* Label */}
                                <div className="mt-4 flex items-center gap-3 md:mt-5">
                                    <span
                                        className="
                                            h-px
                                            w-5
                                            bg-white/30
                                            transition-all
                                            duration-500
                                            group-hover:w-10
                                            group-hover:bg-white
                                        "
                                    />

                                    <span
                                        className="
                                            font-mono
                                            text-[10px]
                                            uppercase
                                            tracking-[0.22em]
                                            text-white/50
                                            transition-colors
                                            duration-500
                                            group-hover:text-white/80
                                            sm:text-xs
                                        "
                                    >
                                        {item.label}
                                    </span>
                                </div>
                            </div>

                            {/* Bottom hover line */}
                            <div className="absolute bottom-0 left-0 h-px w-full bg-white/5">
                                <div
                                    className="
                                        h-full
                                        w-0
                                        bg-white
                                        transition-all
                                        duration-700
                                        ease-out
                                        group-hover:w-full
                                    "
                                />
                            </div>

                            {/* Hover metadata */}
                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    right-5
                                    top-12
                                    font-mono
                                    text-[8px]
                                    uppercase
                                    tracking-[0.3em]
                                    text-white/0
                                    transition-all
                                    duration-500
                                    group-hover:text-white/20
                                    md:right-10
                                "
                            >
                                +{String(item.Number).padStart(3, "0")}
                            </span>
                        </article>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
                        Experience / Output / Reach
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
                        04 / 04
                    </span>
                </div>
            </div>
        </section>
    );
}