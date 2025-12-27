import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/Home"

function App() {
  return (
    <div className="font-sans">
      <Home />
      <Analytics />
    </div>
  )
}

export default App
