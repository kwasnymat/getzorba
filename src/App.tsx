import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./shared/components/Navbar";
import { globalStyles } from "./stitches.config";
import { Homes, PageNotFound } from "./pages";

function App() {
  globalStyles();

  return (
    <div className="App">
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/homes" element={<Homes />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
