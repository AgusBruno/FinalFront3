import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Home from "./components/pages/home/Home";
import Dentists from "./components/pages/dentists/Dentists";
import Detail from "./components/pages/detail/Detail"
import Form from "./components/pages/form/Form"
import Fav from "./components/pages/favorites/Fav"
import { useContext } from "react";
import { Context } from './components/utils/ContextProvider';

function App() {
  const { theme } = useContext(Context);

  return (
    <div className="App">
      <div className={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dentists" element={<Dentists />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/form" element={<Form />} />
          <Route path="/favorites" element={<Fav />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </div>
    </div>
  );
}

export default App;
