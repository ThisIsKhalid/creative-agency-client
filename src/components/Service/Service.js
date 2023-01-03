import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Service = ({service}) => {
    const {img, title, description} = service
    return (
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: "none",
          pt: 2,
          mx: "auto",
          "&:hover": {
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
          sx={{
            width: "auto",
            mx: "auto",
          }}
        />
        <CardContent
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
};

export default Service;