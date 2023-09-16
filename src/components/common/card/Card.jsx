import {useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../../public/images/doctor.png";
import { Button } from "@mui/material";


const Card = ({ name, username, id }) => {
 
  const dentista = {
    id,
    name,
    username,
  };
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("odontologos") || "[]").find(
      (dentist) => dentist.id === dentista.id
    )
  );

  const handleAddToFavorites = () => {
    const favoriteDentists = JSON.parse(
      localStorage.getItem("odontologos") || "[]"
    );
    const existingDentist = favoriteDentists.find(
      (dentist) => dentist.id === dentista.id
    );

    if (existingDentist) {
      localStorage.clear("odontologos");
      alert(`Error, ${dentista.name} ya se encuentra en tu lista de favoritos`);
      return;
    }

    favoriteDentists.push(dentista);
    localStorage.setItem("odontologos", JSON.stringify(favoriteDentists));
    setIsFavorite(true);
  };

  const handleRemoveFromFavorites = () => {
    const favoriteDentists = JSON.parse(
      localStorage.getItem("odontologos") || "[]"
    );
    const updatedDentists = favoriteDentists.filter(
      (dentist) => dentist.id !== dentista.id
    );

    localStorage.setItem("odontologos", JSON.stringify(updatedDentists));
    setIsFavorite(false);
  };

  return (
    <div className={`card ${isFavorite ? "favorite" : ""}`}>
      <img className="imagen" src={img} alt="doctor" height={150} />
      <div>
        <h2>
          <Link to={`/${id}`}>{name}</Link>
        </h2>
      </div>
      <h3>{username}</h3>
      {isFavorite ? (
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleRemoveFromFavorites}
          className="removeButton"
        >
          Eliminar de favoritos
        </Button>
      ) : (
        <button onClick={handleAddToFavorites} className="favButton">
          Añadir a favoritos 💙
        </button>
      )}
    </div>
  );
};

export default Card;
