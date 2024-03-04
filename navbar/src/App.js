import NavBar from "./component/NavBar";
import Simple from "./component/pages/Simple";
import ButtonClick from "./component/pages/ButtonClick";
import OneClick from "./component/pages/OneClick";
import StopWatch from "./component/pages/StopWatch";
import { Route, Routes } from "react-router-dom";
import './app.css'; 


function App() {
  return (
    <>
      <NavBar />

 

      <Routes>
        <Route path='/' exect element={<Simple />} />
        <Route path='/buttonclick' exect element={<ButtonClick />} />
        <Route path='/click' exect element={<OneClick />} />
        <Route path='/stopwatch' exect element={<StopWatch />} />
      </Routes>
    </>
  );
}

export default App;
