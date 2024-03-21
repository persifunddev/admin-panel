import { Routes, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard/Dashboard"
import Analytic from "../components/Analytic/Analytic";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} >
            <Route path="analytic" element={<Analytic/>} />
        </Route>
    </Routes>
  );
};

export default AppRoutes;
