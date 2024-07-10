import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterList from "./pages/character-list/character-list";
import CharacterDetailPage from "./pages/character-detail-page/character-detail-page";

const App: React.FC = () => (
  <Routes>
    <Route path="/">
      <Route index element={<CharacterList />} />
      <Route path="/characters/:id" element={<CharacterDetailPage />} />
    </Route>
  </Routes>
);

export default App;
