import styles from "./App.module.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Subreddits from "../components/Subreddits";
import Feed from "../features/Feed";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <header>
        <Header />
        <SearchBar />
      </header>
      <main>
        <Feed />
        <Subreddits />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
