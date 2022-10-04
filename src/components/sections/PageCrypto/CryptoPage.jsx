import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CryptoHistory from "./CryptoHistory";

const CryptoPage = () => {
  const params = useParams();
  const [crypto, setCrypto] = useState({});
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchCrypto = async () => {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/${params.id}`
      );
      const data = await response.json();
      setCrypto(data.data);
    };
    const fetchHistory = async () => {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/${params.id}/history?interval=d1`
      );
      const data = await response.json();
      setHistory(data.data);
    };
    fetchCrypto();
    fetchHistory();
  }, []);
  return (
    <>
      <div className="sm:flex max-h-80">
        <div className=" m-3 p-4 text-center rounded-lg border shadow-md sm:p-8 bg-gray-800 border-gray-700">
          <p className="mb-1 text-base sm:text-lg text-gray-200">
            <span className="text-blue-400">Ranking: </span>#{crypto.rank}
          </p>
          <h5 className="mb-3 text-3xl font-bold text-white">
            <span className="text-slate-300">Crypto:</span> {crypto.name}
          </h5>
          <ul className="mb-5 sm:text-lg text-gray-300  text-start sm:ml-40">
            <li className="text-green-500">
              <span className="text-blue-400 ">* Precio :</span> USD$
              {crypto.priceUsd}
            </li>
            <li>
              <span className="text-blue-400 ">* Símbolo : </span>
              {crypto.symbol}
            </li>
            <li className="text-green-500">
              <span className="text-blue-400 ">
                * Porcentaje de cambio en las últimas 24h:
              </span>{" "}
              %{crypto.changePercent24Hr}
            </li>
          </ul>
        </div>
        <CryptoHistory history={history} />
      </div>
    </>
  );
};

export default CryptoPage;
