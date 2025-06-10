import React, { useState, useContext, useEffect } from "react";
import {
  Pagination,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Button,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AOS from 'aos';
import 'aos/dist/aos.css';

import models from "../common/constant";
import ModelCard from "../components/ModelCard";
import styles from "../css/ModelsPage.module.css";
import { ThemeContext } from "../theme/ThemeContext";

const ModelsPage = () => {
  const { darkMode } = useContext(ThemeContext);
  const [page, setPage] = useState(1);
  const [searchModal, setSearchModal] = useState("");

  const modelsPerPage = 3;
  const handleChange = (event, value) => setPage(value);
  const handleSearch = (event) => {setSearchModal(event.target.value); setPage(1)}

  

   const filteredModels = models.filter((model) =>
    model.title.toLowerCase().includes(searchModal.toLowerCase())
  );
const displayedModels = filteredModels.slice(
    (page - 1) * modelsPerPage,
    page * modelsPerPage
  );
  const totalPages = Math.ceil(filteredModels.length / modelsPerPage);

  return (
    <Box className={`${styles.root} ${darkMode ? styles.darkRoot : ""}`}>
    <Typography
  variant="h4"
  sx={{
    color: darkMode ? 'grey.100' : 'grey.900',
    fontWeight: 'bold',
    mb: 2,
  }}
>
  AI Solution For Application Development
</Typography>


      <Box className={styles.searchContainer}>
        <Box className={`${styles.searchBox} ${darkMode ? styles.darkSearchBox : ""}`}>
          <SearchIcon className={styles.searchIcon} />
         <TextField
  variant="standard"
  placeholder="Search models"
  fullWidth
  value={searchModal}
  onChange={handleSearch}
  InputProps={{
    disableUnderline: true,
    className: `${styles.searchInput} ${darkMode ? styles.darkSearchInput : ""}`,
  }}
/>

        </Box>

        <Button
          variant="contained"
          startIcon={<FilterListIcon />}
          className={styles.filterButton}
        >
          Filters
        </Button>
      </Box>

      <Container className={styles.cardSection}>
        <Grid container spacing={3} justifyContent="center">
          {displayedModels.length > 0 ? (
            displayedModels.map((model, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ModelCard model={model} />
              </Grid>
            ))
          ) : (
            <Box className={styles.noResult}>
              <Typography variant="h6" sx={{color:darkMode ? "#bbb" : 'text.secondary'}}>
                No models found for your search.
              </Typography>
            </Box>
          )}
        </Grid>

        <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Pagination
  count={totalPages}
  page={page}
  onChange={handleChange}
  color="primary"
  className={darkMode ? styles.darkPagination : ""}
  sx={{
    '& .MuiPaginationItem-root': {
      color: darkMode ? '#fff' : '#000',
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: '#1976d2',
      color: '#fff',
    },
  }}
/>

        </Grid>
      </Container>
    </Box>
  );
};

export default ModelsPage;
