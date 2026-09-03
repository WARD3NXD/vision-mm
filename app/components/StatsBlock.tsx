"use client"

export default function StatsBlock() {

    const stats = [
        {
            label: "Projects",
            suffix: "+",
            number: "10",
        },
        {
            label: "Client Retantion",
            suffix: "%",
            number: "97.6",
        },
        {
            label: "Industries",
            suffix: "+",
            number: "12",
        },
        {
            label: "Aura Farmed",
            suffix: "+",
            number: "99",
        },
    ];
    return (
<section className="md:mt-20 md:mb-20 md:py-16">
    <div className="flex flex-row w-full border-t border-b border-white/10">

        {/* Left spacer - hidden on mobile */}
        <div className="hidden md:block w-full md:max-w-15 bg-white/10"></div>

        {/* Stats Loop */}
        <div className="grid grid-cols-2 w-full md:flex md:flex-row">
            {stats.map((item) => (
                <div
                    key={item.label}
                    className="flex flex-col w-full p-5 md:p-8 border-r border-b md:border-b-0 items-center justify-center gap-2 border-white/10 text-center"
                >
                    <div className="text-3xl sm:text-4xl md:text-5xl">
                        <span className="font-semibold">{item.number}</span>
                        <span>{item.suffix}</span>
                    </div>

                    <div>
                        <span className="font-mono tracking-widest uppercase text-xs sm:text-sm text-white/60">
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