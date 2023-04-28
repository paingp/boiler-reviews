import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import InstructorReviewForm from "./components/InstructorReviewForm"
import CourseReviewForm from "./components/CourseReviewForm"
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
            <Route path="/course/:courseId" element={<CourseReview/>}></Route>
            <Route path="/instructor/:instructorId" element={<InstructorReview/>}></Route>
            <Route path="/coursereviewform" element={<CourseReviewForm/>}></Route>
            <Route path="/instrreviewform" element={<InstructorReviewForm/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
