const CryptoHistory = ({ history }) => {
  const h = history.slice(-10).reverse();
  return (
    <table className="w-fit text-base text-left text-gray-400 sm:m-3 m-auto">
      <thead className=" uppercase bg-gray-700 text-gray-400">
        <tr>
          <th
            colSpan={2}
            className="py-3 px-3 sm:px-24 text-center border border-b-2"
          >
            Historial de los últimos 10 días
          </th>
        </tr>
        <tr>
          <th scope="col" className="py-3 px-3 sm:px-24">
            Fecha
          </th>
          <th scope="col" className="py-3 px-3 sm:px-12">
            Precio en USD
          </th>
        </tr>
      </thead>
      <tbody>
        {h.map(({ date, priceUsd, time }) => (
          <tr key={time} className="border-b bg-gray-800 border-gray-700">
            <td className="py-4 sm:px-24   whitespace-nowrap text-white">
              {new Date(date).getDate()}/{new Date(date).getMonth() + 1}/
              {new Date(date).getFullYear() + 1}
            </td>
            <td className="py-4 px-3 sm:px-12 text-green-500	">
              ${parseFloat(priceUsd).toFixed(4)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
{
  /* <table className="w-full text-sm text-left text-gray-400">
      <thead className="text-xs uppercase bg-gray-700 text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Fecha
          </th>
          <th scope="col" className="py-3 px-6">
            Precio en $USD
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b bg-gray-800 border-gray-700">
          <th
            scope="row"
            className="py-4 px-6 font-medium  whitespace-nowrap text-white"
          >
            Apple MacBook Pro 17"s
          </th>
          <td className="py-4 px-6">Sliver</td>
        </tr>
      </tbody>
    </table> */
}

export default CryptoHistory;
