import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import pic from "../Assets/Images/single-image1.png";
const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfcfcfba",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              first title
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              sub title
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
