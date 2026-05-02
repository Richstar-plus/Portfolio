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
              <Route path="/Portfolio/about" element={<AboutPage />} />
              <Route path="/Portfolio/projects" element={<ProjectsPage />} />
              <Route path="/Portfolio/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ExperienceProvider>
    </ThemeProvider>
  );
}

export default App;
