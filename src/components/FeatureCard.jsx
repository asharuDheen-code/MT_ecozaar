import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";

const FeatureCard = ({
  title,
  description,
  buttonText,
  imageSrc,
  bgColor,
  textColor,
  buttonColor,
  buttonCustomStyle,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: "10px",
        width: { xs: "100%", sm: 500, md: 550 },
        height: "100%",
        overflow: "hidden",
        px: { xs: 2, sm: 3 },
        py: { xs: 2, sm: 0 },
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ height: "100%" }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography color="inherit" sx={{ mb: 2, opacity: 0.9 }}>
            {description}
          </Typography>
          <Button
            variant="contained"
            color={buttonColor}
            sx={{
              ...buttonCustomStyle,
              fontSize: "0.875rem",
              px: 2.5,
              py: 1,
            }}
            disableElevation
          >
            {buttonText}
          </Button>
        </CardContent>

        <Box
          component="img"
          src={imageSrc}
          alt={title}
          sx={{
            width: { xs: "60%", sm: 150 },
            height: { xs: "auto", sm: 150 },
            objectFit: "contain",
            mx: { xs: "auto", sm: 0 },
            my: { xs: 2, sm: 0 },
          }}
        />
      </Stack>
    </Card>
  );
};

export default FeatureCard;
