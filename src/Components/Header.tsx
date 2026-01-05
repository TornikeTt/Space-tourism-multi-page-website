import { useState, useEffect, useRef } from "react";
import clsx from "clsx";

import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

export default function Header() {
    const menuItems = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const updatePosition = () => {
            const item = itemsRef.current[activeIndex];

            if (item && item.offsetParent) {
                const parentRect = item.offsetParent.getBoundingClientRect();
                const itemRect = item.getBoundingClientRect();

                setUnderlineStyle({
                    left: itemRect.left - parentRect.left,
                    width: itemRect.width,
                });
            }
        };

        updatePosition();
        window.addEventListener("resize", updatePosition);
        return () => window.removeEventListener("resize", updatePosition);
    }, [activeIndex]);

    return (
        <header
            className={clsx(
                // base
                "flex h-22 items-center justify-between px-6",
                // md
                "md:pr-0",
                //lg
                "lg:mt-10",
            )}
        >
            <img src={logo} alt="Logo" />
            <img src={hamburger} alt="Menu" className="md:hidden" />

            <nav
                className={clsx(
                    // base
                    "hidden h-full bg-white/5 pr-10",
                    // md
                    "md:block md:w-160",
                    // lg
                    "lg:w-184",
                )}
            >
                <div className="relative flex h-full items-center justify-end">
                    <ul className="font-bellefair-condensed flex h-full items-center gap-12 text-white">
                        {menuItems.map((each, index) => {
                            return (
                                <li
                                    key={index}
                                    ref={(el) => {
                                        itemsRef.current[index] = el;
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                    className="cursor-pointer font-bold"
                                >
                                    <span className="pr-3">0{index}</span>
                                    {each}
                                </li>
                            );
                        })}
                    </ul>
                    <div
                        style={{
                            left: `${underlineStyle.left}px`,
                            width: `${underlineStyle.width}px`,
                        }}
                        className="absolute bottom-0 h-1 bg-white transition-all"
                    ></div>
                </div>
            </nav>
        </header>
    );
}
