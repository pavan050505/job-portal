import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness } from "lucide-react";

const Header = () => {
    const [search, setSearch] = useSearchParams();
    const [showSignIn, setShowSignIn] = React.useState(false);
    const { isLoaded } = useUser();

    React.useEffect(() => {
        if (search.get("signIn")) {
            setShowSignIn(true);
        }
    }, [search]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowSignIn(false);
            setSearch({});
        }
    };
    return (
    <>
        <nav className="py-4 flex justify-between items-center">
            <Link to="/">
                <img src="/logo.png" className="h-20" />
            </Link>
            <div className="flex gap-8">
                {isLoaded && (
                    <>
                        <SignedOut>
                            <Button variant="outline" onClick={() => setShowSignIn(true)}>
                                Login
                            </Button>
                        </SignedOut>
                        <SignedIn>
                            <Link to="/post-job">
                                <Button variant="destructive" className="rounded-full">
                                    Post a Job
                                </Button>
                            </Link>
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "w-10 h-10",
                                    },
                                }}
                            >
                                <UserButton.MenuItems>
                                    <UserButton.Link  
                                        label="My Jobs"
                                        labelIcon={<BriefcaseBusiness size={15}/>}
                                        href="/my-jobs"
                                    />
                                    <UserButton.Link  
                                        label="Saved Jobs"
                                        labelIcon={<BriefcaseBusiness size={15}/>}
                                        href="/saved-jobs"
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                        </SignedIn>
                    </>
                )}
            </div>
        </nav>
        {showSignIn && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
                <SignIn
                    signUpForceRedirectUrl="/onboarding"
                    fallbackRedirectUrl="/onboarding"
                />
            </div>
        )}
    </>
    );
}
export default Header;