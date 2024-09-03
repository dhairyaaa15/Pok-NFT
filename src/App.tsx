import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import './index.css';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
