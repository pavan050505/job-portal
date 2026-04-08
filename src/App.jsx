import { Button } from "@/components/ui/button"
import './App.css'
import { RouterProvider } from "react-router-dom"
import AppLayout from "./Layouts/app-layout"
import { createBrowserRouter } from "react-router-dom"
import LandingPage from "./pages/landing"
import Onboarding from "./pages/onboarding"
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
        path:"/job",
        element:(
        <ProtectedRoute>
        <JobListing />
        </ProtectedRoute>
        ),
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
      },
      {
        path: "*",
        element: (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <h1 className="text-4xl font-bold gradient-title">404 - Page Not Found</h1>
            <p className="text-gray-400">The page you are looking for doesn't exist.</p>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              Go Home
            </Button>
          </div>
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
