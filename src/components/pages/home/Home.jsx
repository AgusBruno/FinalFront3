import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>
        <Link to="/dentists"> Conoce Nuestro Staff </Link>{" "}
      </h1>

      <h3>Atendemos las siguientes obras sociales:</h3>
      <ul>
        <li>Osde</li>
        <li>Prevención Salud.</li>
        <li>Avalian</li>
        <li>Sancor Salud.</li>
        <li>Medifé</li>
        <li>Galeno</li>
        <li>Federada Salud.</li>
      </ul>
    </div>
  );
};

export default Home;
