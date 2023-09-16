import { Typography } from "@mui/material";
import FavCard from "../../common/favCard/FavCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";


const fav = () => {
 
  let fav = JSON.parse(localStorage.getItem("odontologos"));
  

  return (
    <div>
      <Typography color="primary" variant="h3" align="center" margin={10}>
        Odontologos Favoritos
      </Typography>
      <div className="card-grid">
        {fav.map((item) => (
          <FavCard
            name={item.name}
            username={item.username}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
      <div>
        <Stack direction="row" spacing={2} margin={5}>
          <Link to={`/dentists`}>
            <Button variant="contained" endIcon={<SendIcon />}>
              Atras
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
};

export default fav;
