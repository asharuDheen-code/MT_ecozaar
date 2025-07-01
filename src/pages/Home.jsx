import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FilterBar from "../components/FilterBar";
import FeatureCard from "../components/FeatureCard";

import atherScooter from "../assets/images/ather-scooter.png";
import solarPanel from "../assets/images/solar-panel.png";

const Home = () => {
  const featureCardData = [
    {
      title: "Zap into the EV life!",
      description: "Subscribe or Buy, the choice is yours, ALWAYS!",
      buttonText: "EV Scooter",
      imageSrc: atherScooter,
      bgColor: "#349141",
      buttonColor: "primary",
      textColor: "white",
      buttonCustomStyle: {
        backgroundColor: "white",
        color: "#303f9f",
        "&:hover": { backgroundColor: "#eee" },
      },
    },
    {
      title: "Rooftop Solar Purchase Made Easy",
      description: "Zero Electricity Bill! We simplify this process.",
      buttonText: "Rooftop Solar",
      imageSrc: solarPanel,
      bgColor: "#303f9f",
      buttonColor: "secondary",
      textColor: "white",
      buttonCustomStyle: {
        backgroundColor: "white",
        color: "#303f9f",
        "&:hover": { backgroundColor: "#eee" },
      },
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Banner />
        <FilterBar />

        <Box
          sx={{ py: { xs: 4, md: 6 }, backgroundColor: "background.default" }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ mb: { xs: 3, md: 4 }, fontWeight: 600 }}
            >
              Eco-Smart Finds to Power Your Green Journey
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {featureCardData.map((card, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={10}
                  md={6}
                  lg={5}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FeatureCard {...card} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box sx={{ py: { xs: 4, md: 6 }, textAlign: "center" }}>
          <Container maxWidth="md">
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Electrify your life
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ px: { xs: 2, sm: 4 } }}
            >
              Subscribe or Buy, the choice is yours, ALWAYS!
            </Typography>
          </Container>
        </Box>
      </main>
    </>
  );
};

export default Home;
