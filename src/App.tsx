import HomePage from "./pages/Homepage"
import Header from "./components/Header/Header"
import CursorSpotlight from "./components/common/CursorSpotlight"
function App() {
  return (
    <div className="min-h-screen">
      <CursorSpotlight />
      <Header/>
      <HomePage/>
    </div>
  )
}

export default App