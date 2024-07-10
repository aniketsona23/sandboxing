import "./index.css";
import React, { Suspense, lazy } from "react";
// import Card from './Components/ProjectCard';
// import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MembersPage from "./pages/MembersPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import FaqPage from "./pages/FaqPage";

const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/members" element={<MembersPage />} />
          <Route exact path="/faq" element={<FaqPage />} />
          <Route exact path="/facilities" element={<FacilitiesPage />} />
        </Routes>
        <hr className="footer-divider" />
        <Footer />
      </Suspense>
    </BrowserRouter>
    // <Test />
  );
}

export default App;
