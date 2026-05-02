import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context";
import { ExperienceProvider } from "./context/ExperienceContext";
import { Layout } from "./components/Layout";
import { HomePage, AboutPage, ProjectsPage, ContactPage } from "./pages";

function App() {
  return (
    <ThemeProvider>
      <ExperienceProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/Portfolio/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ExperienceProvider>
    </ThemeProvider>
  );
}

export default App;
