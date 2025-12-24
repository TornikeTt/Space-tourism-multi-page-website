import clsx from "clsx";

import logo from "../assets/shared/logo.svg";
import humburger from "../assets/shared/icon-hamburger.svg";

export default function Header() {
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
            <img src={humburger} alt="Menu" className="md:hidden" />

            <nav
                className={clsx(
                    // base
                    "hidden h-full flex-1 bg-white/5 pr-10",
                    //md
                    "md:block md:max-w-160",
                    //lg
                    "lg:max-w-184",
                )}
            >
                <ul className="font-bellefair-condensed flex h-full items-center justify-end gap-12 text-white">
                    <li>HOME</li>
                    <li>
                        <span className="pr-3 font-bold">01</span>
                        DESTINATION
                    </li>
                    <li>
                        <span className="pr-3 font-bold">02</span>CREW
                    </li>
                    <li>
                        <span className="pr-3 font-bold">03</span>TECHNOLOGY
                    </li>
                </ul>
            </nav>
        </header>
    );
}
