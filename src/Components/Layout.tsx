import clsx from "clsx";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Layout() {
    return (
        <div
            className={clsx(
                // base
                "min-h-screen w-screen overflow-auto bg-[url(assets/home/background-home-mobile.jpg)] bg-cover bg-center bg-no-repeat",
                //md
                "md:bg-[url(assets/home/background-home-tablet.jpg)]",
                //lg
                "lg:bg-[url(assets/home/background-home-desktop.jpg)]",
            )}
        >
            <main
                className={clsx(
                    // base
                    "flex h-screen flex-col px-6",
                    //md
                    "md:px-0",
                )}
            >
                <Header />
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
