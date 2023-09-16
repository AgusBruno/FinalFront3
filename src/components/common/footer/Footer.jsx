import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import instagram from "../../../../public/images/ico-instagram.png";
import tiktok from "../../../../public/images/ico-tiktok.png";
import whatsapp from "../../../../public/images/ico-whatsapp.png";
import facebook from "../../../../public/images/ico-facebook.png";
import styles from "./Footer.css";
import { useContext } from "react";
import { Context } from '../../utils/ContextProvider';

const Footer = () => {
  const {theme} = useContext(Context);

  let clase;

  if(theme == 'dark'){
    clase = styles.footerdark
  }
  else{
    clase = styles.footerlight
  }


  return (
    <footer className={clase} >
    <Box sx={{ flexGrow: 1 }} marginTop={4}>
      <AppBar position="static" itemAling="center">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            textAlign="center"
            component="div"
          >
            DIGITAL HOUSE
            <div className="img-container">
          
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon" src={facebook} alt="ico-facebook.png" />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon" src={tiktok} alt="ico-tiktok.png" />
              </a>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon" src={whatsapp} alt="ico-whatsapp.png" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon" src={instagram} alt="ico-instagram.png" />
              </a>
              </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </footer>
  );
};

export default Footer;
