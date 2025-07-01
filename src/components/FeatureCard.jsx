import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

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
        width: "550px",
        height: "218px",
        position: "relative",
        overflow: "visible",
        display: "flex",
        alignItems: "center",
        px: 3,
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography color="inherit" sx={{ mb: 2, opacity: 0.9 }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          color={buttonColor}
          sx={buttonCustomStyle}
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
          position: "absolute",
          top: "46px",
          left: "382.74px",
          width: "157.83px",
          height: "157.83px",
          objectFit: "contain",
          zIndex: 1,
        }}
      />
    </Card>
  );
};

export default FeatureCard;
