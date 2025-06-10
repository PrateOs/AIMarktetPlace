
  return (
    <>
      <Box sx={{ width: "100%" , display:"flex" }}>
        <AppBar
          position="relative"
          sx={{
            backgroundColor: "#fff",
            top: "0px",
            width: "100vw",
            left: 0,
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Typography
              variant="h8"
              sx={{ textAlign: "center", color: "black" }}
            >
              Models
            </Typography>
            <Typography
              variant="h8"
              sx={{ flexGrow: 0.1, textAlign: "center", color: "black" }}
            >
              Pricing
            </Typography>
            <Typography
              variant="h8"
              sx={{ flexGrow: 0.1, textAlign: "center", color: "black" }}
            >
              Docs
            </Typography>
            <Typography
              variant="h8"
              sx={{ flexGrow: 0.1, textAlign: "center", color: "black" }}
            >
              Contacts
            </Typography>
            <Button
              variant="contained"
              sx={{ textAlign: "center", color: "black" }}
            >
              Get Started
            </Button>
            <Button
              color="secondary"
              sx={{ flexGrow: 0.1, textAlign: "center", color: "black" }}
            >
              Sign In
            </Button>
          </Toolbar>
          <Divider />
        </AppBar>
      </Box>

      <Container
        sx={{
          mt: 2,
          height: "39vw",
          position: "relative",
          border: "1px solid",
          alignContent:"Center"
        }}
      >
         <TextField
            variant="outlined"
            placeholder="Search models"
            fullWidth
            sx={{
               marginTop :"10px",
              maxWidth: 600,
              borderRadius: "20px",
              alignItems:"center",
              "& .MuiOutlinedInput-root": {
                borderRadius: "2px",
                marginBottom :"10px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 3, sm: 3, md: 3 }}
        >
          <Grid item xs={2} md={4}>
            <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: 3 }}>
              {/* Image Container */}
              <Box
                sx={{
                  backgroundColor: "#FFCDD2", // Light red background
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <CardMedia
                  component="img"
                  image="https://afw-live.s3.amazonaws.com/model/model_306/Image_models_705x268_15.png?w=640&q=75" // Replace with your actual image path
                  alt="Zephyr AI"
                  sx={{ width: 80, height: 80 }}
                />
              </Box>

              {/* Text Content */}
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6" fontWeight="bold">
                LLama3 - 8B
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
                  Meta's latest opensource LLama3 8B model
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: 5 }}>
                  Try it out
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={4}>
            <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: 3 }}>
              {/* Image Container */}
              <Box
                sx={{
                  backgroundColor: "#FFCDD2", // Light red background
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <CardMedia
                  component="img"
                  image="/path-to-your-image.png" // Replace with your actual image path
                  alt="Zephyr AI"
                  sx={{ width: 80, height: 80 }}
                />
              </Box>

              {/* Text Content */}
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6" fontWeight="bold">
                LLama3 - 8B
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
                  Zephyr is a series of language models that are trained to act
                  as helpful assistants.
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: 5 }}>
                  Try it out
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={4}>
            <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: 3 }}>
              {/* Image Container */}
              <Box
                sx={{
                  backgroundColor: "#FFCDD2", // Light red background
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <CardMedia
                  component="img"
                  image="/path-to-your-image.png" // Replace with your actual image path
                  alt="Zephyr AI"
                  sx={{ width: 80, height: 80 }}
                />
              </Box>

              {/* Text Content */}
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6" fontWeight="bold">
                  Zephyr-7B
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
                  Zephyr is a series of language models that are trained to act
                  as helpful assistants.
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: 5 }}>
                  Try it out
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: 3 }}>
              {/* Image Container */}
              <Box
                sx={{
                  backgroundColor: "#FFCDD2", // Light red background
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <CardMedia
                  component="img"
                  image="/path-to-your-image.png" // Replace with your actual image path
                  alt="Zephyr AI"
                  sx={{ width: 80, height: 80 }}
                />
              </Box>

              {/* Text Content */}
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6" fontWeight="bold">
                  Zephyr-7B
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
                  Zephyr is a series of language models that are trained to act
                  as helpful assistants.
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: 5 }}>
                  Try it out
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: 3 }}>
              {/* Image Container */}
              <Box
                sx={{
                  backgroundColor: "#FFCDD2", // Light red background
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <CardMedia
                  component="img"
                  image="/path-to-your-image.png" // Replace with your actual image path
                  alt="Zephyr AI"
                  sx={{ width: 80, height: 80 }}
                />
              </Box>

              {/* Text Content */}
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6" fontWeight="bold">
                  Zephyr-7B
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
                  Zephyr is a series of language models that are trained to act
                  as helpful assistants.
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: 5 }}>
                  Try it out
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: 3 }}>
              {/* Image Container */}
              <Box
                sx={{
                  backgroundColor: "#FFCDD2", // Light red background
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <CardMedia
                  component="img"
                  image="/path-to-your-image.png" // Replace with your actual image path
                  alt="Zephyr AI"
                  sx={{ width: 80, height: 80 }}
                />
              </Box>

              {/* Text Content */}
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6" fontWeight="bold">
                  Zephyr-7B
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
                  Zephyr is a series of language models that are trained to act
                  as helpful assistants.
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: 5 }}>
                  Try it out
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <footer
        style={{
          textAlign: "center",
          backgroundColor: "#2196F3",
          padding: "40px",
          marginTop: "10px",
        }}
      >
        <Typography variant="h6" color="white">
          Footer
        </Typography>
      </footer> */}
    </>
  );