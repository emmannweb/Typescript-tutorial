import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Book } from "../types/types";

export default function MediaCard({ book }: { book: Book }) {
  return (
    <Card sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {book?.volumeInfo?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {book?.volumeInfo?.authors}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 90 }}
        image={book?.volumeInfo?.imageLinks?.smallThumbnail}
        alt="book cover"
      />
    </Card>
  );
}
