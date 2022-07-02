import { BrowserRouter as Router, Routes, Route, Navigate, useHistory } from "react-router-dom";

//Importing components from local folder
import { Landing, Studio, Editor, Login, SignUp, ErrorPage } from "../global"

function App() {

  const user = localStorage.getItem("token")

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/landing/login" element={<Login />} />
          <Route exact path="/landing/signup" element={<SignUp />} />
          {user && <Route exact path='/studio' element={<Studio />} />}
          {user && <Route exact path='/editor/:project' element={<Editor />} />}
          <Route path="/" exact element={<Navigate replace to="/landing/login" />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
