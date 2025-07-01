import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import cityRoad from "../assets/images/city-road.jpg";
import tvsIqube from "../assets/images/tvs-iqube.png";

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        pt: { xs: 6, sm: 8, md: 10 },
        pb: { xs: 10, md: 12 },
        background: `url(${cityRoad})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={cityRoad}
        alt="City Road Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(100%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ textAlign: "center", color: "#2A1C4D" }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: 500,
              lineHeight: "120%",
              letterSpacing: "0.72px",
            }}
          >
            THE RIDE THAT’S AS SMART
            <br />
            AS YOU ARE,&nbsp;
            <Box
              component="span"
              sx={{
                fontFamily: "Inter",
                fontWeight: 800,
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                lineHeight: "120%",
              }}
            >
              THE TVS iQUBE
            </Box>
          </Typography>

          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#2A1C4D",
              color: "#fff",
              fontWeight: 600,
              px: 3,
              py: 1,
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
              textTransform: "uppercase",
              borderRadius: "6px",
              mt: 2,
              "&:hover": { backgroundColor: "#1e1233" },
            }}
          >
            JUST ₹3499 / MONTH!
          </Button>
        </Box>

        <Box
          component="img"
          src={tvsIqube}
          alt="TVS iQube Scooter"
          sx={{
            width: { xs: "80%", sm: "auto" },
            maxWidth: { xs: "260px", sm: "300px", md: "350px" },
            maxHeight: { xs: "160px", sm: "200px", md: "220px" },
            mt: 3,
            mb: { xs: -6, sm: -8, md: -10 },
            mx: "auto",
            display: "block",
          }}
        />
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "60px",
          background:
            "linear-gradient(to top, #fff 0%, rgba(255,255,255,0.5) 80%, transparent 100%)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Banner;
