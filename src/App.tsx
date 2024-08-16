import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import "./App.css";
import Layout from "./pages/Layout";
import Heading from "./pages/Heading";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="build-resume" element={<Layout />}>
          <Route path="heading" element={<Heading />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
