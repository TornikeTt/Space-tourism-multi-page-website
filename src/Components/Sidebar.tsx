import { Link } from "react-router";
import clsx from "clsx";
import closeIcon from "../assets/shared/icon-close.svg";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: string[];
    activeIndex: number;
}

export default function Sidebar({
    isOpen,
    onClose,
    menuItems,
    activeIndex,
}: SidebarProps) {
    return (
        <aside
            className={clsx(
                // base
                "fixed inset-y-0 right-0 z-50 w-64 bg-white/5 backdrop-blur-xl transition-transform duration-300 ease-in-out",
                // md
                "md:hidden",
                //condition
                isOpen ? "translate-x-0" : "translate-x-full",
            )}
        >
            <div className="flex justify-end p-8">
                <button onClick={onClose} aria-label="Close Menu">
                    <img src={closeIcon} alt="Close" />
                </button>
            </div>
            <ul className="mt-12 flex flex-col gap-8 pl-8">
                {menuItems.map((each, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <li key={each} className="relative">
                            <Link
                                to={
                                    index === 0 ? "/" : `/${each.toLowerCase()}`
                                }
                                className="font-bellefair-condensed flex items-center gap-3 tracking-[2.7px] text-white"
                                onClick={onClose}
                            >
                                <span className="w-5 font-bold">0{index}</span>
                                {each}
                            </Link>
                            <div
                                className={clsx(
                                    "absolute top-0 right-0 h-full w-1 bg-white transition-opacity",
                                    isActive ? "opacity-100" : "opacity-0",
                                )}
                            />
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
