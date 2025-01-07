import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "Home", path: "/home", external: false },
  { name: "About", path: "/about", external: false },
  { name: "Repositorio GitHub", path: "https://github.com/LucaasN/challenge-embryoxite", external: true },
  { name: "Netlify", path: "https://challenge-embryoxite.netlify.app/", external: true }
];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path: string, external: boolean) => {
    if (external) {
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      navigate(path);
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" sx={{ width: "100%" }} className="bg-dark">
    <Container maxWidth={false} disableGutters>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer"
          }}
          onClick={() => handleNavigate("/home", false)}
        >
          <img
            src="/logo-embryoxite.png"
            style={{ maxWidth: 200 }}
            alt="Logo Embryoxite"
          />
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map(({ name, path, external }) =>
              external ? (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <a href={path} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                    <Typography textAlign="center">{name}</Typography>
                  </a>
                </MenuItem>
              ) : (
                <MenuItem key={name} onClick={() => handleNavigate(path, external)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              )
            )}
          </Menu>
        </Box>

        <Typography
          variant="h5"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={() => handleNavigate("/home", false)}
        >
          <img
            src="/logo-embryoxite.png"
            style={{ maxWidth: 200 }}
            alt="Logo Embryoxite"
          />
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map(({ name, path, external }) =>
            external ? (
              <a key={name} href={path} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>{name}</Button>
              </a>
            ) : (
              <Button key={name} onClick={() => handleNavigate(path, external)} sx={{ my: 2, color: "white", display: "block" }}>
                {name}
              </Button>
            )
          )}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
 );
};
