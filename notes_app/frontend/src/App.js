import React, { useState } from "react";
import "./index.css"
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";

export default function App() {
  const [showEditButton, toggleEditButton] = useState(false)
  const [editing, toggleEditing] = useState(false) 
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header showEditButton={showEditButton} toggleEditing={toggleEditing}/>
          <Routes>
            <Route path="/" exact element={<NotesListPage editing={editing} toggleEditButton={toggleEditButton}/>} />
            <Route path="/note/:id" element={<NotePage toggleEditButton={toggleEditButton}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

