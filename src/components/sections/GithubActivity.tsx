import { getGithubContributions } from "@/lib/github";

export async function GithubActivity() {
    const contributions = await getGithubContributions("Mayank-saraswal");

    // Create a grid of contributions
    // If API fails or no token, show placeholder pattern matching design
    const weeks = contributions?.weeks || [];
    const totalContributions = contributions?.totalContributions || 1893; // Fallback to design number

    // Flatten days for custom grid if needed, or render weeks
    // The design shows a specific grid pattern. Let's try to map the real data to a similar visual.
    // Design has ~52 columns (weeks) and 7 rows (days).

    return (
        <section className="mb-24">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-2 block">Featured</span>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-1">GitHub Activity</h2>
                    <p className="text-sm text-muted-foreground font-medium">Total: <span className="text-foreground">{totalContributions} contributions</span></p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card/50 px-3 py-1.5 rounded-full border border-border/50">
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
                        </span>
                        <span className="font-bold text-slate-400">Offline</span>
                    </div>
                    <span className="w-px h-3 bg-slate-700 mx-1"></span>
                    <span className="text-slate-500">Yesterday worked 3h 26m</span>
                </div>
            </div>

            <div className="p-8 bg-white dark:bg-[#0d1117] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                {/* Character/Avatar Deviation */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <div className="relative w-4 h-4">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSmjT7Fotc_HypFKjN3eYQ05_A5dISt7D_nOZf-1aX8OSm10WOznF-l3ecw8ROI9xQB8K-Lel-_uQNafxYjAiBDXL4cQcpG2TRiwHSDqWqxAQ68nYtQUFAgijd2OBp6A0x1-JU7OfBgw6YLFUFGAXMVtBWUMq2Hem_elDy-_0GE_-THanedSgWPVwtqpU5oB2B_ZQPQxCnLugmbGXphHETFRbrsxeiGk6UnjyzKocftrA6zJYXLbJp8GaGSKJ5cJUXRTZv3O4Z_pLf"
                            alt="avatar"
                            className="w-full h-full object-cover rounded-full border border-white/20 shadow-lg"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
                    <div className="flex gap-1.5 min-w-[700px]">
                        {/* Month Labels mock - simplistic approach for layout */}
                    </div>

                    <div className="flex gap-1.5 min-w-max">
                        {(weeks.length > 0 ? weeks : Array.from({ length: 53 })).map((week: any, i: number) => (
                            <div key={i} className="flex flex-col gap-1.5">
                                {Array.from({ length: 7 }).map((_, j) => {
                                    // Mock data logic if real data missing
                                    const day = week?.contributionDays?.[j];
                                    const count = day ? day.contributionCount : (Math.random() > 0.8 ? Math.floor(Math.random() * 10) : 0);

                                    let bg = "bg-[#ebedf0] dark:bg-[#161b22]"; // Empty
                                    if (count > 0) bg = "bg-[#9be9a8] dark:bg-[#0e4429]";
                                    if (count > 3) bg = "bg-[#40c463] dark:bg-[#006d32]";
                                    if (count > 6) bg = "bg-[#30a14e] dark:bg-[#26a641]";
                                    if (count > 10) bg = "bg-[#216e39] dark:bg-[#39d353]";

                                    return (
                                        <div
                                            key={j}
                                            className={`w-4 h-4 rounded-sm ${bg} hover:ring-2 hover:ring-slate-400 dark:hover:ring-white/50 transition-all`}
                                            title={`${count} contributions`}
                                        />
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center text-sm text-slate-500 font-medium">
                    <div className="flex gap-10 pl-2">
                        <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <span>Less</span>
                        <div className="w-4 h-4 bg-[#ebedf0] dark:bg-[#161b22] rounded-sm"></div>
                        <div className="w-4 h-4 bg-[#9be9a8] dark:bg-[#0e4429] rounded-sm"></div>
                        <div className="w-4 h-4 bg-[#40c463] dark:bg-[#006d32] rounded-sm"></div>
                        <div className="w-4 h-4 bg-[#30a14e] dark:bg-[#26a641] rounded-sm"></div>
                        <div className="w-4 h-4 bg-[#216e39] dark:bg-[#39d353] rounded-sm"></div>
                        <span>More</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
