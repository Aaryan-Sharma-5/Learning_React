import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostCarousel from "./components/PostCarousel";
import PostCarouselProvider from "./store/post-carousel-store";

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <PostCarouselProvider>
      <div className="app-container">
        <Sidebar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        ></Sidebar>
        <div className="headerFooter">
          <Header></Header>
          {selectedPage === "Home" ? (
            <PostCarousel></PostCarousel>
          ) : ( 
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>      
        </div>
      </div>
    </PostCarouselProvider>
  );
}

export default App;
