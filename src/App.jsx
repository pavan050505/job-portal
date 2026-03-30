import { Button } from "@/components/ui/button"
import './App.css'
import { Children } from "react"
import { RouterProvider } from "react-router-dom"
import AppLayout from "./Layouts/app-layout"
import { createBrowserRouter } from "react-router-dom"
import LandingPage from "./pages/landing"
import Onboarding from "./pages/Onboarding"
import JobListing from "./pages/job-listing"
import JobPage from "./pages/job"
import MyJobs from "./pages/my-jobs"
import PostJob from "./pages/post-job"
import SaveJobs from "./pages/saved-job"
import { ThemeProvider } from "./components/theme-provider"


const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<LandingPage />
      },
      {
        path:"/onboarding",
        element:<Onboarding />
      },
      {
        path:"/job-listing",
        element:<JobListing />
      },
      {
        path:"/job",
        element:<JobPage />
      },
      {
        path:"/my-jobs",
        element:<MyJobs />
      },
      {
        path:"/post-job",
        element:<PostJob />
      },
      {
        path:"/saved-jobs",
        element:<SaveJobs />
      }
    ]
  },
])


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
