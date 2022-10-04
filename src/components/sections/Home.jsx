import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-12 font-mono flex justify-around bg-gray-800 text-white">
      <div>
        <h2 className="text-2xl p-10">
          Las 100 Criptomonedas más populares del mundo y su información
        </h2>
        <Link
          to="/criptomonedas"
          className="m-5 border  focus:ring-4 focus:outline-none  font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
        >
          Ver criptomonedas
        </Link>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1625207970742-d2777655d440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpcHRvbW9uZWRhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
