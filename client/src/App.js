import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CourseReview from "./pages/CourseReview"
import InstructorReview from "./pages/InstructorReview"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/course/:id" element={<CourseReview/>}></Route>
            <Route path="/instructor/:id" element={<InstructorReview/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
