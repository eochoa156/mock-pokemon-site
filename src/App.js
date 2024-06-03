import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Wishlist from "./Components/Wishlist";
import About from "./Components/About";
import Generation from "./Components/Generations";
// import Gen1 from './Components/Generations/Gen1';
// import Gen2 from './Components/Generations/Gen2';
// import Gen3 from './Components/Generations/Gen3';
// import Gen4 from './Components/Generations/Gen4';
// import Gen5 from './Components/Generations/Gen5';
// import Gen6 from './Components/Generations/Gen6';
// import Gen7 from './Components/Generations/Gen7';
// import Gen8 from './Components/Generations/Gen8';
// import Gen9 from './Components/Generations/Gen9';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/gen/:genId" element={<Generation />} />
        {/* <Route path="/gen1" element={<Gen1 />} />
        <Route path="/gen2" element={<Gen2 />} />
        <Route path="/gen3" element={<Gen3 />} />
        <Route path="/gen4" element={<Gen4 />} />
        <Route path="/gen5" element={<Gen5 />} />
        <Route path="/gen6" element={<Gen6 />} />
        <Route path="/gen7" element={<Gen7 />} />
        <Route path="/gen8" element={<Gen8 />} />
        <Route path="/gen9" element={<Gen9 />} /> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;