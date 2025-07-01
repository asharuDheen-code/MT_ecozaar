import React, { useState } from "react";
import {
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Container,
  Button,
  Box,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const FilterBar = () => {
  const [filter, setFilter] = useState("ev");
  const [budget, setBudget] = useState("");
  const [brand, setBrand] = useState("");

  return (
    <Container maxWidth="md" sx={{ mt: -5, position: "relative", zIndex: 3 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm="auto">
            <Box
              sx={{
                display: "flex",
                border: "2px solid #4CAF50",
                borderRadius: "32px",
                backgroundColor: "#e6f5e9",
                overflow: "hidden",
                width: "fit-content",
              }}
            >
              <Button
                onClick={() => setFilter("ev")}
                sx={{
                  px: 3,
                  py: 1,
                  backgroundColor: filter === "ev" ? "white" : "transparent",
                  color: filter === "ev" ? "#4CAF50" : "#2E2E2E",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: filter === "ev" ? "32px 0 0 32px" : 0,
                  transition: "all 0.3s ease",
                }}
              >
                EV Scooter
              </Button>
              <Button
                onClick={() => setFilter("solar")}
                sx={{
                  px: 3,
                  py: 1,
                  backgroundColor: filter === "solar" ? "white" : "transparent",
                  color: filter === "solar" ? "#2E2E2E" : "#2E2E2E",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: filter === "solar" ? "0 32px 32px 0" : 0,
                  transition: "all 0.3s ease",
                }}
              >
                Rooftop Solar
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ maxWidth: 207, width: "100%" }}
          >
            <FormControl fullWidth size="small">
              <InputLabel>Select Your Budget</InputLabel>
              <Select
                value={budget}
                label="Select Your Budget"
                onChange={(e) => setBudget(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Under ₹50,000</MenuItem>
                <MenuItem value={2}>₹50,000 - ₹1,00,000</MenuItem>
                <MenuItem value={3}>Over ₹1,00,000</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ maxWidth: 207, width: "100%" }}
          >
            <FormControl fullWidth size="small">
              <InputLabel>Select Your Brand</InputLabel>
              <Select
                value={brand}
                label="Select Your Brand"
                onChange={(e) => setBrand(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="tvs">TVS</MenuItem>
                <MenuItem value="ather">Ather</MenuItem>
                <MenuItem value="ola">Ola</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm="auto">
            <IconButton
              color="primary"
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                "&:hover": { backgroundColor: "primary.dark" },
              }}
            >
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default FilterBar;
