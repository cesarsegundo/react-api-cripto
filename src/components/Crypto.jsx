const Crypto = ({ id, name, rank, priceUsd }) => {
  return (
    <a
      href="#"
      className="block p-6 max-w-sm rounded-lg border border-l-8  shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-400">Pocisión: {rank}</p>
      <p className="font-normal text-gray-400">Precio: USD ${priceUsd}</p>
    </a>
  );
};

export default Crypto;
