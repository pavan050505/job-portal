import React  from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const Header = () => {
    return (
    <>
        <nav className="py-4 flex justify-between items-center">
            <Link to="/">
                <img src="/logo.png" className="h-20" />
            </Link>
            <div className="flex gap-8">
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button variant="outline">Sign In</Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton appearance={{
                        elements: {
                            avatarBox: "w-10 h-10"
                        }
                    }} />
                </SignedIn>
            </div>
        </nav>
    </>
    );
}
export default Header;