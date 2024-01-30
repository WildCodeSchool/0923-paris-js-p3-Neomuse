import Box from "@mui/material/Box";
import { Link /* useParams */ } from "react-router-dom";
/* import { useState, useEffect } from "react"; */

function ArtistlistHome({ artist }) {
  return (
    <div className="body_artistlist">
      <Link to={`/artists/${artist.artist_id}`}>
        <Box
          className="box"
          sx={{
            border: "0.6rem solid white",
            width: "93%",
            height: "93%",
            margin: "0 auto",
            overflow: "hidden",
            "&:hover": { opacity: "0.8", cursor: "pointer" },
          }}
        >
          <img
            src={artist?.thumbnail}
            srcSet={artist?.thumbnail}
            loading="lazy"
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Link>
    </div>
  );
}

export default ArtistlistHome;
