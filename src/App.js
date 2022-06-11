// import "styles/index.scss"

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
