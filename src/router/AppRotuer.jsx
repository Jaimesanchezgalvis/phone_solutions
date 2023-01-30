import { Route, Routes } from "react-router-dom";

import { Plp } from "../pages/Plp";
import { Pdp } from "../pages/Pdp";
import { SearchPage } from "../pages/SearchPage";
import { NotFound404 } from "../pages/NotFound404";

export const AppRotuer = () => {
  return (
    <Routes>
        <Route path="/phone_solutions/" element={<Plp />} />
        <Route path="/phone_solutions/:id" element={<Pdp />} />
        <Route path="/phone_solutions" element={<SearchPage />} />
        <Route path="/phone_solutions/*" element={<NotFound404 />} />
    </Routes>
  );
};
