import { useLoaderData } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import Oeuvre from "../../components/Oeuvre";

import "./artwork.css";

function Artworklist() {
  const { products } = useLoaderData();
  return (
    <section className="artWorkList">
      <div className="list">
        <h1 className="h1Oeuvres">Découvrir nos oeuvres</h1>

        <div className="bouttonWorklist">
          <button type="button" className="bouttonOeuvreList">
            Peinture
          </button>
          <button type="button" className="bouttonOeuvreList">
            Scuplture
          </button>
          <button type="button" className="bouttonOeuvreList">
            Photographie
          </button>
        </div>
        <Grid
          container
          spacing={{ xs: 3, md: 10 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ flexGrow: 1 }}
        >
          {products.map((product) => (
            <Grid xs={2} sm={4} md={4} key={product.id}>
              <Oeuvre product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}

export default Artworklist;
