import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CourseReviewForm from "./components/CourseReviewForm"

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<CourseReviewForm/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
