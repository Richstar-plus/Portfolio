import { createContext, useState } from "react";

export const ExperienceContext = createContext();

export function ExperienceProvider({ children }) {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      date: "2019 - 2023",
      title: "Bachelor's of Science (BSc) in Computer Science",
      description:
        "Ignatius Ajuru University of Education, Rivers State",
      category: "education",
    },
    {
      id: 2,
      date: "2023 - 2024",
      title: "Frontend Development",
      description:
        "Specialized in building responsive and interactive user interfaces using HTML, CSS, and JavaScript.",
      category: "education",
    },
    {
      id: 3,
      date: "2024 - 2025",
      title: "React Development",
      description:
        "Advanced React development with hooks, context API, and modern JavaScript patterns.",
      category: "education",
    },
    {
      id: 4,
      date: "2024 - present",
      title: "Frontend Development",
      description:
        "Created responsive and user-friendly interfaces for various web applications using React and javaScript.",
      category: "experience",
    },
    {
      id: 5,
      date: "2025 - present",
      title: "Portfolio Development",
      description:
        "Created and maintained personal portfolio showcasing various projects and skills.",
      category: "experience",
    },
  ]);

  const [activeCategory, setActiveCategory] = useState("all");

  const addExperience = (experience) => {
    setExperiences((prev) => [...prev, { ...experience, id: Date.now() }]);
  };

  const updateExperience = (id, updatedExperience) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === id ? { ...exp, ...updatedExperience } : exp,
      ),
    );
  };

  const deleteExperience = (id) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  const getExperiencesByCategory = (category) => {
    if (category === "all") return experiences;
    return experiences.filter((exp) => exp.category === category);
  };

  const value = {
    experiences,
    setExperiences,
    activeCategory,
    setActiveCategory,
    addExperience,
    updateExperience,
    deleteExperience,
    getExperiencesByCategory,
  };

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
}
