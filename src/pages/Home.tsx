import clsx from "clsx";

import Header from "../Components/Header";

function Home() {
    return (
        <div
            className={clsx(
                // base
                "absolute h-screen w-screen bg-[url(assets/home/background-home-mobile.jpg)] bg-cover bg-center bg-no-repeat",
                //md
                "md:bg-[url(assets/home/background-home-tablet.jpg)]",
                //lg
                "lg:bg-[url(assets/home/background-home-desktop.jpg)]",
            )}
        >
            <Header />
        </div>
    );
}

export default Home;
