import { Button } from "@/components/ui/button"
import './App.css'
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
import { ClerkProvider } from "@clerk/clerk-react"
import ProtectedRoute from "./components/protected-route"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

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
        element:(
        <ProtectedRoute>
        <Onboarding />
        </ProtectedRoute>
        ),
      },
      {
        path:"/job-listing",
        element:(
        <ProtectedRoute>
        <JobListing />
        </ProtectedRoute>
        ),
      },
      {
        path:"/job",
        element:(
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        )
      },
      {
        path:"/my-jobs",
        element:(
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        )
      },
      {
        path:"/post-job",
        element:(
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        )
      },
      {
        path:"/saved-jobs",
        element:(
          <ProtectedRoute>
            <SaveJobs />
          </ProtectedRoute>
        )
      }
    ]
  },
])


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <RouterProvider router={router} />
      </ClerkProvider>
    </ThemeProvider>
  )
}

export default App
