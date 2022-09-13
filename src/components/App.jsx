import { Outlet } from "react-router-dom";
import Menu from "./sections/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default App;
