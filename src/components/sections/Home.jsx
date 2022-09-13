import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>100 Criptomonedas mas populares del mundo</h2>
      <Link to="/criptomonedas">Ver critos</Link>
    </div>
  );
};

export default Home;
