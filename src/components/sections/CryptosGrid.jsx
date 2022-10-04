import { useEffect, useState } from "react";
import Crypto from "../Crypto";

const CryptosGrid = () => {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch("https://api.coincap.io/v2/assets");
      const data = await response.json();
      setCryptos(data.data);
    };
    fetchingData();
  }, []);
  return (
    <div className="m-4 grid sm:grid-cols-4 gap-2 grid-cols-1">
      {cryptos.map((crypto) => (
        <Crypto
          key={crypto.id}
          id={crypto.id}
          name={crypto.name}
          rank={crypto.rank}
          priceUsd={crypto.priceUsd}
        />
      ))}
    </div>
  );
};

export default CryptosGrid;
