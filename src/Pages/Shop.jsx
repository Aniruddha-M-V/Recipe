import { Box, Chip, Grid2, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";       
import NoData from "../Components/NoData";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
useEffect(() => {
  axios
    .get('https://dummyjson.com/recipe?limit=150')
    .then((response) => {
      setRecipe(response.data.recipes); // Adjust the property name based on API response
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get('https://dummyjson.com/recipe/tags') // Assuming tags represent categories
    .then((response) => {
      setCategories(response.data); // Adjust if API returns an object instead of an array
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

console.log(recipe);
  useEffect(() => {
    let filtered = [...recipe];

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (recipe) => recipe.category === selectedCategory
      );
    }
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Set the filtered products
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, recipe]);
  console.log(selectedCategory)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 sx={{ p: 2 }} size={{ xs: 12, sm: 3 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Filter By category
            </Typography>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "flex-start",
                gap: 1,
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <Chip
                color={selectedCategory === "All" ? "success" : "default"}
                label={"All"}
                component={Paper}
                onClick={()=>setSelectedCategory("All")}
              />
              {categories.map((item,index)=>(
                <Chip key={index} label={item.name} onClick={()=>setSelectedCategory(item.slug)}
                color={selectedCategory==item.slug?"success":"default"} component={Paper} elevation={2}/>
              ))}
            </Box>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 9 }} sx={{ p: 2 }}>
          <Box>
            <TextField
              fullWidth
              type="search"
              label="Search product here"
              placeholder="search product by title"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <Box sx={{ flexGrow: 1, p: 3 }}>
              <Grid2 container spacing={2}>
                {filteredProducts.length>0?
                filteredProducts.map((item,index)=>(
                <Grid2 key={index} size={{ xs: 12, sm: 4 }}>
                  <ProductCard recipe={item}/>
                </Grid2>
                )):(
               <Box sx={{ flexGrow: 1, p: 3 }}>
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 12 }}>
                      <NoData />
                    </Grid2>
                  </Grid2>
                </Box>
                )}
              </Grid2>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}