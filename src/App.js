import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import RuleCustomisation from "./pages/RuleCustomisation";
import AdvancedMetrics from "./pages/AdvancedMetrics";
import Forecast from "./pages/Forecast";
import FacilitiesCustomization from "./pages/FacilitiesCustomization";
import Customization from "./pages/Customization";
import NewCustomization from "./pages/NewCustomization";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rules" element={<RuleCustomisation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/advancedmetrics" element={<AdvancedMetrics />} />
          <Route path="/facilities-customization" element={<Customization />} />
          <Route
            path="/facilities-customization2"
            element={<NewCustomization />}
          />
          {/* <Route path="/customization" element={<C />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
