// import expo from "../../assets/expo.jpg";
import "./about.css";

function About() {
  return (
    <div>
      <div className="background" />
      <div>
        <h1 className="h1_about">Neo Muse</h1>
        <div className="boxp_about">
          <p className="p_about">
            C’est un espace dédié à la découverte et à la célébration de l'art
            contemporain. Notre galerie s'engage à promouvoir et à soutenir des
            artistes exceptionnels du, offrant une plateforme dynamique pour
            leurs œuvres diverses et innovantes.
          </p>
        </div>
      </div>
      <div>
        <h2 className="h2_about"> Donner de la visibilité à nos artistes</h2>
        <div className="boxp_about">
          <p className="p_about">
            Nous sommes fiers de jouer un rôle actif dans la découverte et la
            mise en avant d'artistes émergents ainsi que d'artistes établis.
            Notre équipe passionnée travaille en étroite collaboration avec
            chaque artiste pour créer des expositions uniques qui mettent en
            lumière leur vision créative et leur démarche artistique.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
