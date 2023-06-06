import "./App.css";
//import Dashboard from "./pages/Dashboard";
import SideBar from "./components/SideBar/CampaignSideBar"
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import HomePage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import When from "./components/Campaign/CampaignTop/CampaignTop";

const Layout1 = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="hidden lg:flex ">
        <SideBar />
        <div className="w-full  h-[95vh] bg-[#ececec] relative pb-[100px] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <Layout1 />,
    children: [
      {
        path: "/when",
        element: <When />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
