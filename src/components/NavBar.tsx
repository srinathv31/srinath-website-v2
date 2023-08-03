"use client";

import MenuButton from "./MenuButton";

export default function NavBar(): JSX.Element {
    // Scroll To Top
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="bg-black text-white p-4">
                <button type="button" onClick={scrollToTop}>
                    <p>SRI</p>
                </button>
            </div>
            <div className="absolute right-0">
                <MenuButton />
            </div>
        </div>
    );
}
