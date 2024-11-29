import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import NavbarContaxtProvider from "./context/navbarContaxt";
import HomePage from "./pages/HomePage/HomePage";
import WhoWeArePage from "./pages/WhoWeAre/WhoWeArePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ManagementPage from "./pages/Management/ManagementPage";
import CertificationPage from "./pages/CertificationPage/CertificationPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import TermsPage from "./pages/TermsPage/TermsPage";
import CareerPage from "./pages/CareerPage/CareerPage";
import CareerModelProvider from "./context/careerContext";
import ProjectsContextProvider from "./context/ProjectsContext";
import ProjectPage from "./pages/ProjectsPage/ProjectPage";
function App() {
  return (
    <>
      <NavbarContaxtProvider>
        <ProjectsContextProvider>
          <CareerModelProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<ProjectPage />} />
                <Route path="/who-we-are" element={<WhoWeArePage />} />
                <Route path="/management" element={<ManagementPage />} />
                <Route
                  path="/certifications-and-awards"
                  element={<CertificationPage />}
                />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPage />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/terms-conditions" element={<TermsPage />} />
              </Routes>
            </Layout>
          </CareerModelProvider>
        </ProjectsContextProvider>
      </NavbarContaxtProvider>
    </>
  );
}

export default App;
