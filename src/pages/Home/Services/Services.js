import { Box, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Service from "../../../components/Service/Service";


const services = [
  {
    id: 1,
    img: "https://i.ibb.co/HNhykGp/iphone-1.png",
    title: "Web & Mobile Design",
    description:
      "We craft stunning and amazing web UI, using a well drafted UX to fit your product.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/r0gHkvM/color-palette-1.png",
    title: "Graphic Design",
    description:
      "Amazing flyers, social media posts and brand representation that would make your brand stand out.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/CvQwzKC/coding-1.png",
    title: "Web Development",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
];

const Services = () => {
  return (
    <Box sx={{mt: 2}}>
      <SectionTitle title="Provide awesome" colored="Services" sx={{ mb: 8 }} />

      <Grid container spacing={2}>
        {
            services.map(service => (
                <Grid key={service.id} item xs={12} sm={6} md={4}>
                    <Service key={service.id} service={service}></Service>
                </Grid>
            ))
        }
      </Grid>
    </Box>
  );
};

export default Services;
