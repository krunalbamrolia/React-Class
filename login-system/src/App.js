import { Route, Routes } from "react-router-dom";
import Login from './components/pages/Login';
import SignUp  from "./components/pages/SignUp";
import ForgotPassword  from "./components/pages/Forgotpassword";
import Dashbord from './components/pages/Dashbord';
import "./app.css";

function App() {
  return (
    <>
      <Routes>
        <Route  path="/" exect element={<Login />} />
        <Route  path="/signup" exect element={<SignUp />} />
        <Route  path="/forgotpassword" exect element={<ForgotPassword />} />
        <Route  path="/dashboard" exect element={<Dashbord />} />
      </Routes>
    </>
  );
}

export default App;