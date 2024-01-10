import { useLoaderData } from "react-router-dom";

function Favoris() {
  const users = useLoaderData();
  return <div>{users && users.map((user) => <p>{user.email}</p>)}</div>;
}

export default Favoris;
