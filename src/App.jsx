import Edit from "./Pages/edit"
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/home";
import Index from "./Pages/index";
import New from "./Pages/new";
import Show from "./Pages/show";
import NavBar from "./Components/navBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;