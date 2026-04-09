import { getJobs } from "@/api/apiJobs";
import { useSession } from "@clerk/clerk-react";
import { useEffect } from "react";

const JobListing = () => {
  const { session, isLoaded } = useSession();
  console.log("JobListing rendered, isLoaded:", isLoaded);

  const fetchJobs = async () => {
    try {
      console.log("Attempting to fetch jobs...");
      
      if (!session) {
        console.log("No session found, skipping fetch.");
        return;
      }

      const supabaseAccessToken = await session.getToken({
        template: "supabase",
      });
      
      console.log("Supabase Token retrieved.");

      const data = await getJobs(supabaseAccessToken, {});
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error in fetchJobs:", error);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      fetchJobs();
    }
  }, [isLoaded, session]);
//hello world
  return <div>JobListing</div>;
};

export default JobListing;
