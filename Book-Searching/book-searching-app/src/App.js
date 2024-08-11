import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Wishlist from "./components/Wishlist/Wishlist";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left">
        <SearchBar /> 
        <SearchResults />
      </div>
      <div className="right">
        <Wishlist />
      </div>
    </div>
  );
}

export default App;
