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
  Collapse,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Menu as MenuIcon,
  LocationOnOutlined as LocationOnOutlinedIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedNav, setSelectedNav] = useState(null);
  const [drawerDropdown, setDrawerDropdown] = useState({});

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

  const handleDrawerDropdownToggle = (text) => {
    setDrawerDropdown((prev) => ({
      ...prev,
      [text]: !prev[text],
    }));
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
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link) => (
          <Box key={link.text}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  if (link.menuItems) {
                    handleDrawerDropdownToggle(link.text);
                  } else {
                    setSelectedNav(link.text);
                    setDrawerOpen(false);
                  }
                }}
              >
                <ListItemText
                  primary={link.text}
                  primaryTypographyProps={{
                    fontWeight: selectedNav === link.text ? "bold" : "normal",
                    color:
                      selectedNav === link.text ? "primary.main" : "inherit",
                  }}
                />
                {link.menuItems &&
                  (drawerDropdown[link.text] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>

            {link.menuItems && (
              <Collapse
                in={drawerDropdown[link.text]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {link.menuItems.map((item) => (
                    <ListItem key={item} disablePadding>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => {
                          setSelectedNav(link.text);
                          setDrawerOpen(false);
                        }}
                      >
                        <ListItemText primary={item} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
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
          <Toolbar disableGutters sx={{ py: 1, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img src={logo} alt="ecozaar logo" style={{ height: 40 }} />
              <Paper
                variant="outlined"
                sx={{
                  px: 2,
                  py: 0.5,
                  display: { xs: "none", sm: "flex" },
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
              sx={{
                flexGrow: 1,
                mx: 2,
                mt: { xs: 2, md: 0 },
                display: { xs: "none", md: "flex" },
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search Product, type or brand"
                fullWidth
                sx={{
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

            <Box sx={{ display: "flex", gap: 1, ml: "auto" }}>
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
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
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
