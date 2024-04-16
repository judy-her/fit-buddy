// import Header from "./components/Header";
import Navbar from './components/Navbar';
import './index.css';
import { Outlet, useLocation } from 'react-router-dom';

export default function App() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}
