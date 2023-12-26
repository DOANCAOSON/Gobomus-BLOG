import "./assets/css/App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <div className="app-container_list">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>


    </div>
  );
}

export default App;
