import { useLoaderData } from "react-router-dom";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import "./home.css";

function Home() {
  const users = useLoaderData();
  return (
    <div>
      <Carousel />
      <Button text="Voir tous les artistes" />
      <Carousel />
      <Button text="Voir toutes les oeuvres" />
      {users && users.map((user) => <p>{user.email}</p>)}
    </div>
  );
}

export default Home;
