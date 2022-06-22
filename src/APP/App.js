import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing components from local folder
import { Studio, Editor } from "../global"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Studio />} />
          <Route exact path='/editor/:project' element={<Editor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
