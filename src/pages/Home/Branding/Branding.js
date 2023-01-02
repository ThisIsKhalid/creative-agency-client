import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const BrandingWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  margin: "2rem 0",
  backgroundColor: "rgba(122, 178, 89, 0.15)",
  [theme.breakpoints.up("md")]: {
    height: "80vh",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  },
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: 10
  },
  justifyContent: "space-between",
  alignItems: "center",
}));

const Branding = () => {
    return (
      <BrandingWrapper>
        <Box
          sx={
            {
              // width: '50%'
            }
          }
        >
          <Stack spacing={3}>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                lineHeight: "1.2",
              }}
            >
              Let’s Grow Your Brand <br /> To The Next Level
            </Typography>
            <Typography sx={{ width: "90%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </Typography>
            <Button
              sx={{
                width: "200px",
              }}
            >
              Hire Us
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            width: {
              sm: '75%',
              md: '50%',
            },
            // display: ['none', 'none', 'block'],
            // display: {
            //   xs: "none",
            //   sm: "none",
            //   md: "block",
            // },
          }}
        >
          <img
            src="https://i.ibb.co/sPXVMbC/Frame.png"
            alt="branding"
            style={{ width: "100%" }}
          />
        </Box>
      </BrandingWrapper>
    );
};

export default Branding;