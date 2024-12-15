import { Box, Typography } from "@mui/material";
import React from "react";
import rehero from "../Assets/Images/rehero.jpg";
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${rehero})`,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:"linear-gradient(144deg, rgba(110, 109, 109, 0.29), rgba(43, 43, 43, 0.47))",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000",
          }}
          gutterBottom
        >
          Welcome to Recipe Book
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "black" }}
        >
          Welcome to Recipe Book website
        </Typography>
 {/* <Typography
  gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "black" }}
        >
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iusto
          totam doloribus id tempore. Numquam a esse ut minima sapiente.
         </Typography> */}
      </Box>
    </Box>
  );
}
