import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import RuleCustomisation from "./pages/RuleCustomisation";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rules" element={<RuleCustomisation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/members" element={<Members />} />
          <Route path="/todo/pending" element={<Todo />} />
          <Route path="/todo/completed" element={<CompletedTodo />} />
          <Route path="/social" element={<Posts />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
