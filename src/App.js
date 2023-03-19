import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import RuleCustomisation from "./pages/RuleCustomisation";
import AdvancedMetrics from "./pages/AdvancedMetrics";
import Forecast from "./pages/Forecast";
import SummaryReport from "./pages/SummaryReport";
import FacilitiesCustomization from "./pages/FacilitiesCustomization";

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
          <Route path="/summaryreport" element={<SummaryReport />} />
          <Route path="/facilitiesCustomization" element={<FacilitiesCustomization />} />
         
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
