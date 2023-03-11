import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Class from "./pages/class/Class";
import Classroom from "./pages/classroom/Classroom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="class" element={<Class />}></Route>
          <Route path="classroom" element={<Classroom />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
