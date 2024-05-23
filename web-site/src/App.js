import React from "react";
import { Navigation } from "./components/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AchievementsProfessionalEnvironmentsPage from "./components/pages/AchievementsProfessionalEnvironmentsPage";
import InfoUserPage from "./components/pages/InfoUserPage";
import PersonalAchievementsPage from "./components/pages/PersonalAchievementsPage";
import NotFoundPage from "./components/pages/NotFountPage";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/infoUserPage" element={<InfoUserPage />} />
        <Route path="/achievementsProfessionalEnvironmentsPage" element={<AchievementsProfessionalEnvironmentsPage />} />
        <Route path="/personalAchievementsPage" element={<PersonalAchievementsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
