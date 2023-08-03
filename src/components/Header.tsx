import NavBar from "./NavBar";

export default function Header(): JSX.Element {
    return (
        <header className="sticky top-0">
            <nav className="relative flex items-center justify-center h-20">
                <NavBar />
            </nav>
        </header>
    );
}
