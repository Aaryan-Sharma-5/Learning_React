import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostCarousel from "./components/PostCarousel";

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="headerFooter">
      <Header></Header>
      <CreatePost></CreatePost>
      <PostCarousel></PostCarousel>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
