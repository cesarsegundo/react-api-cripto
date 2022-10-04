import { Link } from "react-router-dom";

const Crypto = ({ id, name, rank, priceUsd }) => {
  return (
    <Link
      to={`/criptomonedas/${id}`}
      className="block p-6 max-w-sm rounded-lg border border-l-8  shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {name}
      </h5>
      <p className="font-normal text-green-400">
        <span className="text-blue-500">Ranking: #</span>
        {rank}
      </p>
      <p className="font-normal text-green-400">
        <span className="text-blue-500">Precio: USD$</span>
        {priceUsd}
      </p>
    </Link>
  );
};

export default Crypto;
