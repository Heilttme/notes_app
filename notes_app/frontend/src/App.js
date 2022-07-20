import React from "react";
import "./index.css"
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Routes>
            <Route path="/" exact element={<NotesListPage/>} />
            <Route path="/note/:id" element={<NotePage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

