import "./Style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//  import img from './logo.svg'
// import Home from "./Home"
import Index from "./component/Index"
// function Grid(){

// }
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />         
        </Routes>

      </BrowserRouter>


    </div>
  )

}
export default App