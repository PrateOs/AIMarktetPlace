import { useState, useContext } from "react";
import {
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import styles from "../css/ModelCard.module.css";
import { ThemeContext } from "../theme/ThemeContext";

const ModelCard = ({ model }) => {
  const [expanded, setExpanded] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const toggleExpanded = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <Box className={styles.flipCard}>
      <Box className={`${styles.flipper} ${darkMode ? styles.darkCard : ""}`}>
        {/* Front of the Card (Image Only) */}
        <Box className={styles.cardFront}>
          <CardMedia
            component="img"
            image={model.logo}
            alt={`${model.title} Logo`}
            className={styles.logoImage}
          />
        </Box>

        {/* Back of the Card (All Text Content) */}
        <Box className={`${styles.cardBack} ${darkMode ? styles.darkCard : ""}`}>
          <CardContent className={styles.cardContent}>
            {/* Top section for title and description */}
            <Box>
              <Typography variant="h6" gutterBottom className={styles.title}>
                {model.title}
              </Typography>
              <Typography
                variant="body2"
                className={`${styles.description} ${
                  expanded ? styles.expanded : ""
                }`}
              >
                {model.description}
              </Typography>
            </Box>

            {/* Bottom section for buttons */}
            <Box>
              {model.description.length > 180 && (
                <Button
                  size="small"
                  onClick={toggleExpanded}
                  className={styles.viewMore}
                >
                  {expanded ? "View Less" : "View More"}
                </Button>
              )}
              <Box className={styles.tryButtonWrapper}>
                <Button
                  variant="outlined"
                  fullWidth
                  className={styles.tryButton}
                  onClick={() => window.open(model.buttonLink, "_blank")}
                >
                  Try it out
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default ModelCard;