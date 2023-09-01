import Experience from "./Experience/Experience"
import Home from "./Pages/Home"

function App() {
  return (
    <>
      <div>
        <div className="main-page">
          <Home />
        </div>
        <div className="experience">
          <Experience />
        </div>
      </div>
    </>
  )
}

export default App
