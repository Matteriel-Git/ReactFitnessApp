import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png';



const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#2cb8d1" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight="700" sx={{fontSize: {lg: "44", xs: "40px"}}} mb="23px" mt="30px">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective excercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: "#2cb8d1", padding: "10px"}}>Explore Excercises</Button>
      <Typography fontWeight="600" color="#2cb8d1" sx={{opacity: 0.3, display: {lg: 'block', xs: 'none'}}} fontSize="160px">Exercise</Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
    </Box>
  );
};

export default HeroBanner;
