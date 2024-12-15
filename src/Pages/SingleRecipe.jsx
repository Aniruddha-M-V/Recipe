import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function SingleRecipe() {
  const { id } = useParams();
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((response) => {
        setRecipeInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
        setError(true);
      });
  }, [id]);

  if (error) {
    return <Typography color="error">Failed to load recipe data.</Typography>;
  }

  if (!recipeInfo) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box sx={{ p: 1 }}>
        <Grid container spacing={2}>
          {/* Left Column: Recipe Images */}
          <Grid item xs={12} md={2}>
            <Paper
              elevation={0}
              sx={{
                height: "104vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              {recipeInfo.images?.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    cursor: "pointer",
                    margin: "10px 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <img
                    src={image}
                    style={{
                      width: "60%",
                      height: "60%",
                      objectFit: "contain",
                    }}
                    alt={`Recipe ${index}`}
                  />
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* Center Column: Main Recipe Image */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                p: 2,
              }}
            >
              <img
                src={recipeInfo.images?.[0]}
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                alt="Selected"
              />
            </Paper>
          </Grid>

          {/* Right Column: Recipe Details */}
          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ height: "100vh", padding: 2 }}>
              {/* Recipe Title */}
              <Box>
                <Typography
                  variant="h5"
                  color="text.primary"
                  sx={{ fontWeight: "bolder" }}
                >
                  {recipeInfo.title || "No Title Available"}
                </Typography>
              </Box>

              {/* Recipe Rating and Tags */}
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Chip
                  size="small"
                  label={recipeInfo.rating || "N/A"}
                  color={
                    recipeInfo.rating > 4.5
                      ? "success"
                      : recipeInfo.rating > 4
                      ? "warning"
                      : "error"
                  }
                  icon={<StarRateIcon sx={{ fontSize: "16px" }} />}
                  sx={{ borderRadius: "10px" }}
                />
                <Typography variant="body2" color="text.secondary">
                  {recipeInfo.reviews?.length || 0} reviews
                </Typography>
              </Box>

              {/* Recipe Category */}
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography
                  variant="body1"
                  mt={1}
                  fontWeight={"bolder"}
                  color="text.secondary"
                >
                  Category: {recipeInfo.category || "Unknown"}
                </Typography>
              </Box>

              {/* Recipe Description */}
              <Box>
                <Typography variant="body1" mt={2} color="text.secondary">
                  {recipeInfo.description || "No description available."}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Recipe Details Table */}
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Prep Time</TableCell>
                      <TableCell>
                        {recipeInfo.prepTime ? `${recipeInfo.prepTime} mins` : "N/A"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Cook Time</TableCell>
                      <TableCell>
                        {recipeInfo.cookTime ? `${recipeInfo.cookTime} mins` : "N/A"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Servings</TableCell>
                      <TableCell>
                        {recipeInfo.servings || "N/A"}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
