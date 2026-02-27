import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import clsx from "clsx";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import Sidebar from "./Sidebar";

export default function Header() {
    const menuItems = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeIndex = menuItems.findIndex((item, index) => {
        if (index === 0) return location.pathname === "/";
        return location.pathname.startsWith(`/${item.toLowerCase()}`);
    });

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
                "flex h-22 items-center justify-between",
                //lg
                "lg:mt-10",
            )}
        >
            <Link to="/" className="md:pl-6">
                <img src={logo} alt="Logo" />
            </Link>
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                <img src={hamburger} alt="Menu" />
            </button>

            <div
                className={clsx(
                    //base
                    "relative z-20 -mr-8 hidden h-px flex-1 bg-white/25 lg:ml-16",
                    //lg
                    "lg:block",
                )}
            ></div>

            <nav
                className={clsx(
                    // base
                    "hidden h-full bg-white/5 pr-10 backdrop-blur-md",
                    // md
                    "md:block md:w-165",
                    // lg
                    "lg:w-184",
                )}
            >
                <div className="relative flex h-full items-center justify-end">
                    <ul className="font-bellefair-condensed flex h-full items-center gap-12 text-white">
                        {menuItems.map((each, index) => {
                            return (
                                <Link
                                    key={each}
                                    to={
                                        index == 0
                                            ? "/"
                                            : `/${each.toLowerCase()}`
                                    }
                                >
                                    <li
                                        ref={(el) => {
                                            itemsRef.current[index] = el;
                                        }}
                                        className="cursor-pointer"
                                    >
                                        <span className="pr-3 font-bold">
                                            0{index}
                                        </span>
                                        {each}
                                    </li>
                                </Link>
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

            <Sidebar
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                menuItems={menuItems}
                activeIndex={activeIndex}
            />
        </header>
    );
}
