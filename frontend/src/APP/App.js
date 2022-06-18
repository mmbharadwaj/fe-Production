import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing components from local folder
import { Studio } from "../global"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Studio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
