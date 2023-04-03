import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import InstructorReviewForm from "./components/InstructorReviewForm"
import CourseReviewForm from "./components/CourseReviewForm"

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<InstructorReviewForm/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
