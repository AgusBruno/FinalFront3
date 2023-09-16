import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";
import { Context } from "../../utils/ContextProvider.jsx";
import styles from "./Header.css";


const drawerWidth = 240;
const navItems = ["Dentistas", "Contactenos", "<cambiar modo>"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, changeTheme } = useContext(Context);

  let clase;
  if (theme == "dark") {
    clase = styles.headerdark;
  } else {
    clase = styles.headerlight;
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DH ODONTOLOGIA INTEGRAL
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <header className={clase}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              DH ODONTOLOGIA INTEGRAL
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link to={`/dentists`}>
                <Button sx={{ color: "#fff" }}>ODONTOLOGOS</Button>
              </Link>
              <Link to={`/form`}>
                <Button sx={{ color: "#fff" }}>CONTACTENOS</Button>
              </Link>
              <Link to={`/favorites`}>
                <Button sx={{ color: "#fff" }}>FAVORITOS</Button>
              </Link>
              <Switch
                checked={styles.section}
                onChange={changeTheme}
                inputProps={{ "aria-label": "controlled" }
              
              }color="default"
              />
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </header>
  );
}

export default Header;
