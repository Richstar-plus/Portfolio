import { createContext, useState } from "react";

export const ExperienceContext = createContext();

export function ExperienceProvider({ children }) {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      date: "2020 - 2021",
      title: "Web Development Course",
      description:
        "Completed a comprehensive web development course covering HTML, CSS, and JavaScript.",
      category: "education",
    },
    {
      id: 2,
      date: "2021 - 2022",
      title: "React Development",
      description:
        "Advanced React development with hooks, context API, and modern JavaScript patterns.",
      category: "education",
    },
    {
      id: 3,
      date: "2022 - 2023",
      title: "Full Stack Development",
      description:
        "Built full-stack applications using React, Node.js, and various databases.",
      category: "experience",
    },
    {
      id: 4,
      date: "2023 - Present",
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
