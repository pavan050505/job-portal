import React  from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <>
        <nav className="py-4 flex justify-between item-center">
            <Link to="/">
            <img src="/logo.png" className="h-20" />
            </Link>
            <button variant="outline">Login</button>
        </nav>
    </>
    );
}
export default Header;