import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Paper,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Menu as MenuIcon,
  LocationOnOutlined as LocationOnOutlinedIcon,
} from "@mui/icons-material";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedNav, setSelectedNav] = useState(null);

  const handleMenuOpen = (event, menuType) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menuType);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    {
      text: "EV Scooters",
      icon: <KeyboardArrowDownIcon />,
      menuItems: ["Ather", "Ola", "TVS"],
    },
    {
      text: "Rooftop Solar",
      icon: <KeyboardArrowDownIcon />,
      menuItems: ["Residential", "Commercial"],
    },
    { text: "Exchange" },
    { text: "Check Loan Eligibility" },
    { text: "Comparison" },
    { text: "Calculator" },
    { text: "Blogs" },
  ];

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.text} disablePadding>
            <ListItemButton onClick={() => setSelectedNav(link.text)}>
              <ListItemText
                primary={link.text}
                primaryTypographyProps={{
                  fontWeight: selectedNav === link.text ? "bold" : "normal",
                  color: selectedNav === link.text ? "primary.main" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid #e0e0e0", backgroundColor: "#fff" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img src={logo} alt="ecozaar logo" style={{ height: 40 }} />
              <Paper
                variant="outlined"
                sx={{
                  px: 4,
                  py: 0.5,
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "12px",
                  gap: 1,
                }}
              >
                <Box sx={{ fontWeight: 500, fontSize: 14 }}>560055</Box>
                <Box
                  sx={{
                    border: "1px solid #4CAF50",
                    borderRadius: "50%",
                    width: 30,
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 18, color: "#4CAF50" }}
                  />
                </Box>
              </Paper>
            </Box>
            <Box
              sx={{ flexGrow: 1, mx: 3, display: { xs: "none", md: "flex" } }}
            >
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search Product, type or brand"
                sx={{
                  ml: "auto",
                  flex: 1,
                  maxWidth: 400,
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#888" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                FavoriteBorderOutlinedIcon,
                ShoppingCartOutlinedIcon,
                PersonOutlineOutlinedIcon,
              ].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    border: "1px solid #4CAF50",
                    borderRadius: "50%",
                    width: 36,
                    height: 36,
                    color: "#4CAF50",
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Toolbar>
          <Divider />
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                ml: 4,
              }}
            >
              {navLinks.map((link) => (
                <Box key={link.text}>
                  <Button
                    color="inherit"
                    endIcon={link.icon}
                    onClick={(e) => {
                      if (link.menuItems) {
                        handleMenuOpen(e, link.text);
                      } else {
                        setSelectedNav(link.text);
                      }
                    }}
                    sx={{
                      fontWeight: selectedNav === link.text ? "bold" : "normal",
                      borderBottom:
                        selectedNav === link.text ? "2px solid" : "none",
                      borderColor: "primary.main",
                      borderRadius: 0,
                      px: 2,
                      py: 2.5,
                      color:
                        selectedNav === link.text ? "primary.main" : "inherit",
                    }}
                  >
                    {link.text}
                  </Button>

                  {link.menuItems && (
                    <Menu
                      anchorEl={anchorEl}
                      open={activeMenu === link.text}
                      onClose={handleMenuClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      {link.menuItems.map((item) => (
                        <MenuItem
                          key={item}
                          onClick={() => {
                            setSelectedNav(link.text);
                            handleMenuClose();
                          }}
                        >
                          {item}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default Header;
