import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <img
          src="https://i.ibb.co/JsvBDwD/logo.png"
          alt=""
          style={{
            width: "120px",
          }}
        />
      </Box>
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
      <Button
        sx={{
          bgcolor: "primary.green",
          padding: "0.2rem 1.5rem",
        }}
      >
        Login
      </Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: {
            xs: "rgba(122, 178, 89, 0.15)",
            lg: "transparent",
          },
          boxShadow: "none",
          py: {
            xs: 0,
            sm: 1
          },
          position: "static",
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                backgroundColor: "primary.green",
                "&:hover": {
                  backgroundColor: "primary.main",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <img
                src="https://i.ibb.co/JsvBDwD/logo.png"
                alt=""
                style={{
                  width: "150px",
                }}
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "primary.main" }}
                  variant="text"
                >
                  {item}
                </Button>
              ))}
              <Button
                sx={{
                  bgcolor: "primary.green",
                }}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
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
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}
