import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react"
import { BarLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const handleRoleSelection = async (role) => {
    await user.update({
      unsafeMetadata: { role }
    }).then(() => {
      navigate('/job');
    })
    .catch((error) => {
      console.error("Error updating user role:", error);
    });
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role || user?.publicMetadata?.role) {
      navigate('/job', { replace: true });
    }
  }, [user, navigate]);


  if (!isLoaded) {
    return <BarLoader className="mt-4" width={"100%"} color="#36d7b7"/>
  }
  return(
    <div className="flex flex-col items-center justify-center mt-32">
      <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">I am a...</h2>
      <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
        <Button variant="default" className="h-36 text-2xl" onClick={() => handleRoleSelection('candidate')}>Candidate</Button>
        <Button variant="destructive" className="h-36 text-2xl" onClick={() => handleRoleSelection('recruiter')}>Recruiter</Button>
      </div>
    </div>
  );
};

export default Onboarding
