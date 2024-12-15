import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import relogo from '../Assets/Images/ReLogo.png'
const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        color: "#353543",
        py: 4,
        px: 2,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Website Title and Tagline */}          
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              style={{ width: "8%",height:"40%", color: "black"}}
              src={relogo}
              alt="logo"
            />
            <Typography gutterBottom sx={{fontSize:"1.7em",color:"black",display:"inline",justifyContent:"left",alignItems:"center",paddingTop:"9px"}}>Recipe Book</Typography>
          </Box>

        {/* Quick Links */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "right" } }}
        >
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
            <Link
              to="/"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              About
            </Link>
            <Link
              to="/shop"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Recipe
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{ mt: 4, textAlign: "center", color: "#aaa" }}
      >
        &copy; {new Date().getFullYear()} Recipe Book. All rights reserved
      </Typography>
    </Paper>
  );
};

export default Footer;
