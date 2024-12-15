import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function RecipeCard({ recipe }) {
  return (
    <div>
      <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
        <Paper elevation={2} sx={{ height: "100%" }}>
          {/* Recipe Image */}
          <CardMedia
            component="img"
            alt={recipe.name}
            height={"300"}
            image={recipe.image} // Assuming the recipe API has an `image` field
          />

          <CardContent>
            {/* Recipe Title */}
            <Typography
              gutterBottom
              variant="overline"
              fontWeight="bolder"
              component="div"
            >
              {recipe.name}
            </Typography>

            {/* Recipe Category and Tags */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
              }}
            >
              {/* Recipe Category */}
              <Typography variant="subtitle1">{recipe.category}</Typography>

              {/* Recipe Tags */}
              <Box sx={{ display: "flex", justifyContent: "end", gap: 1 }}>
                {recipe.tags &&
                  recipe.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{ borderRadius: "10px" }}
                      variant="outlined"
                    />
                  ))}
              </Box>
            </Box>
          </CardContent>

          {/* Recipe Additional Info */}
          <CardActions>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* Prep Time */}
              <Typography variant="subtitle2">
                Prep Time: {recipe.prepTime} mins
              </Typography>

              {/* Recipe Rating */}
              <Chip
                label={recipe.rating}
                size="small"
                color="success"
                sx={{ borderRadius: "10px" }}
                icon={<StarRateIcon sx={{ fontSize: "10px" }} />}
              />
            </Box>
          </CardActions>
        </Paper>
      </Link>
    </div>
  );
}
