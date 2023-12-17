import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Favorite from "@mui/icons-material/Favorite";
import Stack from "@mui/joy/Stack";
import "./oeuvre.css";

function Oeuvre({ product }) {
  return (
    <section>
      <Card
        sx={{
          bgcolor: "#D1C8E1",
          border: " 0.1rem solid #605f5d",
          boxShadow: "0px 4px 4px #00000040",
          padding: "0.5rem",
          overflow: "hidden",
          "&:hover": {
            boxShadow: "md",
          },
        }}
      >
        <AspectRatio ratio="3/3">
          <Box backgroundColor="#b28244cb">
            <Box
              className="box"
              sx={{
                border: "0.6rem solid white",
                width: "90%",
                height: "90%",
                margin: "0 auto",

                "&:hover": { opacity: "0.8", cursor: "pointer" },
              }}
            >
              <img
                src={product.thumbnail}
                srcSet={product.thumbnail}
                loading="lazy"
                alt=""
                className="imageoeuvre"
              />
            </Box>
          </Box>
        </AspectRatio>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            bgcolor: "white",
          }}
        >
          <Box lineHeight={2} paddingLeft={2} overflow="hidden">
            <Typography level="title-sm" className="soustitreoeuvre ">
              {product.title}
            </Typography>
            <Typography level="body-sm" className="soustitreoeuvre">
              {product.brand}
            </Typography>
            <Typography
              fontSize="title-sm"
              fontWeight="lg"
              className="soustitreoeuvre"
            >
              ${product.price}
            </Typography>
          </Box>
          <Favorite
            sx={{
              fontWeight: "md",
              fontSize: "2rem",
              color: "text.secondary",
              "&:hover": { color: "#CB1F27" },
            }}
          />
        </Stack>
      </Card>
    </section>
  );
}

export default Oeuvre;
