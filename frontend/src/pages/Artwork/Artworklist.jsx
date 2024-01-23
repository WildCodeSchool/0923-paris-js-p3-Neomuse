import "./artwork.css";
import TechniqueList from "../../components/technique/TechniqueList";

function Artworklist() {
  return (
    <section className="artWorkList">
      <div className="list">
        <h1 className="h1Oeuvres">Découvrir nos oeuvres</h1>
        <TechniqueList />
      </div>
    </section>
  );
}

export default Artworklist;
