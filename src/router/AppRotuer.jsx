import { Route, Routes } from "react-router-dom";

import { Plp } from "../pages/Plp";
import { Pdp } from "../pages/Pdp";
import { NotFound404 } from "../pages/NotFound404";
import { PdpBrand } from "../pages/PdpBrand";

export const AppRotuer = () => {
  return (
    <Routes>
      <Route path="/" element={<Plp />} />
      <Route path="/:id" element={<PdpBrand />} />
      <Route path="/:id/:slug" element={<Pdp />} />
      <Route path="/*" element={<NotFound404 />} />
    </Routes>
  );
};
