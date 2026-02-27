import clsx from "clsx";

function Home() {
    return (
        <div className="flex size-full flex-col">
            <div
                className={clsx(
                    // base
                    "flex flex-1 flex-col items-center justify-center gap-6",
                    // md
                    "md:flex-[1.5] md:gap-0",
                )}
            >
                <p
                    className={clsx(
                        // base
                        "font-bellefair-condensed text-center tracking-[15%] text-blue-300",
                        // md
                        "md:text-[28px]",
                    )}
                >
                    SO, YOU WANT TO TRAVEL TO
                </p>
                <h1
                    className={clsx(
                        // base
                        "font-Bellefair text-center text-[80px] font-light text-white",
                        // md
                        "md:text-[144px]",
                    )}
                >
                    SPACE
                </h1>
                <p
                    className={clsx(
                        // base
                        "font-berlow max-w-94.25 text-center text-[15px] leading-[180%] text-white",
                        // md
                        "md:max-w-lg md:text-[16px]",
                    )}
                >
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </div>

            <div
                className={clsx(
                    // base
                    "flex flex-1 items-center justify-center",
                    // md
                    "md:items-start",
                )}
            >
                <button
                    className={clsx(
                        // base
                        "font-bellefair-condensed size-36 rounded-full bg-white text-[18px] text-blue-900",
                        // md
                        "md:size-55 md:text-[32px]",
                    )}
                >
                    EXPLORE
                </button>
            </div>
        </div>
    );
}

export default Home;
