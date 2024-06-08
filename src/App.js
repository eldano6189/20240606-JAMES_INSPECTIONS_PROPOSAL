import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import HomePage from "./pages/home-page/homePage";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
