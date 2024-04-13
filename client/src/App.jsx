import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function App() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Outlet />
    </>
  );
}
