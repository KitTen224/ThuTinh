import Header from "../attitues/header";
import Sidebar from "../attitues/sidebar";
import "../style/mainlayout.css"
function Layout({children}) {
  return (
      <div className="layout">
        <Sidebar />
        <div className="content-area">
          <Header />
          <main className="timeline-main">
            {children} 
          </main>
        </div>  
      </div>
  );
}

export default Layout;