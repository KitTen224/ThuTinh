import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import "../style/mainlayout.css"


export default function GentleLayout({children}) {
  const [showSidebar, setShowSidebar] = useState(false);
   const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
     <div className="layout">
      <>
        <button onClick={toggleSidebar}
        className={`sidebar-toggle-btn ${showSidebar ? "open" : ""}`}>
           {showSidebar ? "🧘" : "🧘"}
        </button>

        {showSidebar && (
          <div className="sidebar-popup">
            <Sidebar />
          </div>
        )}
      </>
        <div className="content-area">
          <Header />
          <main className="timeline-main">
            {children}
          </main>
        </div>  
      </div>
  );
}
