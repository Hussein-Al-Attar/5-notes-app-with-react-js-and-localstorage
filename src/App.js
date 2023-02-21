import "./Components/css/App.css";
import Notes from "./Components/NoteComponents/Notes";
import Header from "./Components/NoteComponents/Header";
import React from 'react'
function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}
export default App;
