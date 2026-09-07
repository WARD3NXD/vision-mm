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

export default function StatsBlock() {
    const [stats, setStats] = useState<Stat[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                setError(false);

                const response = await fetch("/api/stats?sort=id", {
                    cache: "no-store",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch stats");
                }

                const data: StatsResponse = await response.json();

                setStats(data.docs);
            } catch (error) {
                console.error("Failed to load stats:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <section className="md:mt-20 md:mb-20 md:py-16">
                <div className="flex flex-row w-full border-t border-b border-white/10">
                    <div className="hidden md:block w-full md:max-w-15 bg-white/10"></div>

                    <div className="grid grid-cols-2 w-full md:flex md:flex-row">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="
                                    flex
                                    flex-col
                                    w-full
                                    p-5
                                    md:p-8
                                    border-r
                                    border-b
                                    md:border-b-0
                                    items-center
                                    justify-center
                                    gap-2
                                    border-white/10
                                "
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl">
                                    <span className="font-semibold opacity-30">
                                        —
                                    </span>
                                </div>

                                <div>
                                    <span className="font-mono tracking-widest uppercase text-xs sm:text-sm text-white/20">
                                        Loading
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:block w-full md:max-w-15 bg-white/10"></div>
                </div>
            </section>
        );
    }

    if (error) {
        return null;
    }

    return (
        <section className="md:mt-20 md:mb-20 md:py-16">
            <div className="flex flex-row w-full border-t border-b border-white/10">

                {/* Left spacer - hidden on mobile */}
                <div className="hidden md:block w-full md:max-w-15 bg-white/10"></div>

                {/* Stats Loop */}
                <div className="grid grid-cols-2 w-full md:flex md:flex-row">
                    {stats.map((item) => (
                        <div
                            key={item.id}
                            className="
                                flex
                                flex-col
                                w-full
                                p-5
                                md:p-8
                                border-r
                                border-b
                                md:border-b-0
                                items-center
                                justify-center
                                gap-2
                                border-white/10
                                text-center
                            "
                        >
                            <div className="text-3xl sm:text-4xl md:text-5xl">
                                <span className="font-semibold">
                                    {item.Number}
                                </span>

                                <span>
                                    {item.suffix}
                                </span>
                            </div>

                            <div>
                                <span className="
                                    font-mono
                                    tracking-widest
                                    uppercase
                                    text-xs
                                    sm:text-sm
                                    text-white/60
                                ">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right spacer - hidden on mobile */}
                <div className="hidden md:block w-full md:max-w-15 bg-white/10"></div>

            </div>
        </section>
    );
}